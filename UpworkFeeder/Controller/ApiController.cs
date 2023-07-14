using EmbedIO;
using EmbedIO.WebApi;
using EmbedIO.Routing;
using Newtonsoft.Json.Linq;
using System;
using System.Net.Mail;
using System.Security.Cryptography;
using Newtonsoft.Json;

/**
 * https://github.com/unosquare/embedio
 * https://github.com/unosquare/embedio/wiki/Cookbook
 */
internal class ApiController : BaseController
{
    private static readonly Logger VerifyLogger = new($"{DateTime.UtcNow:yyyy-MM-dd}", "log-emailverify");
    private static readonly Logger ApplyLogger = new($"{DateTime.UtcNow:yyyy-MM-dd}", "log-apply");

    [Route(HttpVerbs.Get, "/get")]
    public void GetVerifyUrl([QueryField] string user, [QueryField] string pwd, [QueryField] string email)
    {
        // http://localhost/api/get?user=admin@metagon.online&pwd=qweQWE123!@%23%60&email=cv730@metagon.online
        var url = EmailReader.GetVerifyUrl(user, pwd, email);
        VerifyLogger.WriteLine($"{email} \t {url}");
        SendResponseText(url);
    }

    [Route(HttpVerbs.Get, "/go")]
    public void GoVerifyUrl([QueryField] string user, [QueryField] string pwd, [QueryField] string email)
    {
        // http://localhost/api/go?user=admin@metagon.online&pwd=qweQWE123!@%23%60&email=cv730@metagon.online
        // http://web.valloon.me:2084/api/go?user=admin@metagon.online&pwd=qweQWE123!@%23%60&email=cv730@metagon.online
        var requestUrl = HttpContext.Request.Url.ToString();
        VerifyLogger.WriteLine();
        VerifyLogger.WriteLine($"{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss} \t {requestUrl}");

        try
        {
            for (int i = 0; i < 3; i++)
            {
                var verifyUrl = EmailReader.GetVerifyUrl(user, pwd, email);
                if (verifyUrl == null)
                {
                    Thread.Sleep(3000);
                    continue;
                }
                VerifyLogger.WriteLine($"{email} \t {verifyUrl}", ConsoleColor.Green);
                HttpContext.Redirect(verifyUrl);
                return;
            }
            SendResponseText($"Email not received: {email}");
            VerifyLogger.WriteLine($"{email} \t <Email not received>", ConsoleColor.DarkYellow);
        }
        catch (Exception ex)
        {
            SendResponseText(ex.ToString());
            VerifyLogger.WriteLine($"{email} \t {ex.Message}", ConsoleColor.Red);
        }
    }


    class Proposal
    {
        public string? EmailAddress { get; set; }
        public string? JobId { get; set; }
        public string? LoginData { get; set; }
        public string? LoginJson { get; set; }
        public string? ApplyJson { get; set; }
        public string? LoginStatus { get; set; }
        public string? ApplyStatus { get; set; }
    }

    static readonly List<Proposal> ProposalQueue = new();


    [Route(HttpVerbs.Get, "/email")]
    public void GetEmail([QueryField] string? emailPrefix, [QueryField] string? emailCategory, [QueryField] string? emailNumber, [QueryField] string? emailSuffix)
    {
        AllowCORS();
        if (string.IsNullOrWhiteSpace(emailCategory))
        {
            var emailAddress = $"{emailPrefix}{emailNumber}{emailSuffix}";
            SendResponseJson(new JObject
            {
                { "success", true },
                { "emailCategory", emailCategory },
                { "emailNumber", emailNumber },
                { "emailAddress", emailAddress },
            });
        }
        else
        {
            var config = Config.GetData();
            bool containsCategory = config[$"Profile_{emailCategory}"]["ContainsProfileId"]?.ToInt() > 0;
            if (emailNumber == null)
            {
                var nextValue = config[$"Profile_{emailCategory}"]["Next"]?.ToInt();
                var maxValue = config[$"Profile_{emailCategory}"]["Max"]?.ToInt();
                if (nextValue == null || nextValue > maxValue)
                {
                    SendResponseJson(new JObject { { "success", false }, { "error", "EmailNumber Overflow!" } });
                    return;
                }
                emailNumber = nextValue.Value.ToString();
            }
            var emailAddress = containsCategory ? $"{emailPrefix}{emailNumber}{emailSuffix}" : $"{emailPrefix}{emailCategory}{emailNumber}{emailSuffix}";
            SendResponseJson(new JObject
            {
                { "success", true },
                { "emailCategory", emailCategory },
                { "containsCategory", containsCategory },
                { "emailNumber", emailNumber },
                { "emailAddress", emailAddress },
            });
        }
    }

    [Route(HttpVerbs.Post, "/email")]
    public void PostEmail([FormField] string? emailCategory, [FormField] int? emailNumber)
    {
        AllowCORS();
        if (emailCategory == null || emailNumber == null)
        {
            SendResponseJson(new JObject { { "success", false }, { "error", "Invalid Params" } });
            return;
        }
        var nextEmailNumber = emailNumber.Value;
        nextEmailNumber++;
        for (int i = 0; i < 3; i++)
        {
            try
            {
                var config = Config.GetData();
                config[$"Profile_{emailCategory}"]["Last"] = emailNumber.ToString();
                config[$"Profile_{emailCategory}"]["Next"] = nextEmailNumber.ToString();
                Config.SaveData(config);
                break;
            }
            catch { }
            Thread.Sleep(1000);
        }

        ApplyLogger.WriteLine($"{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss} \t email next number updated: {emailNumber} -> {nextEmailNumber}");
        SendResponseJson(new JObject
        {
            { "success", true },
            { "emailCategory", emailCategory },
            { "emailNumber", emailNumber },
            { "nextEmailNumber", nextEmailNumber },
        });
    }

    [Route(HttpVerbs.Options, "/email")]
    public void OptionsEmail()
    {
        AllowCORS();
    }


    [Route(HttpVerbs.Get, "/loginNext")]
    public void GetLoginNext()
    {
        AllowCORS();
        foreach (var p in ProposalQueue)
        {
            if (p.ApplyJson != null && p.LoginStatus == null && p.ApplyStatus == null)
            {
                SendResponseText(p.LoginData);
                return;
            }
        }
        foreach (var p in ProposalQueue)
        {
            if (p.LoginStatus == null && p.ApplyStatus == null)
            {
                SendResponseText(p.LoginData);
                return;
            }
        }
    }


    [Route(HttpVerbs.Options, "/loginNext")]
    public void OptionsLoginNext()
    {
        AllowCORS();
    }

    [Route(HttpVerbs.Get, "/login")]
    public void GetLogin([QueryField] string? emailAddress, [QueryField] string? jobId)
    {
        AllowCORS();
        if (emailAddress == null || jobId == null)
        {
            SendResponseJson(new JObject { { "error", "Invalid Params" } });
            return;
        }
        foreach (var p in ProposalQueue)
        {
            if (p.EmailAddress == emailAddress && p.JobId == jobId)
            {
                SendResponseJson(p.LoginJson);
                return;
            }
        }
        //SendResponseJson(new JObject { { "error", "Not Found" } });
        SendResponseJson("{}");
    }

    [Route(HttpVerbs.Post, "/login")]
    public void PostLogin([FormField] string? emailAddress, [FormField] string? jobId, [FormField] string? loginJson)
    {
        AllowCORS();
        if (emailAddress == null || jobId == null || loginJson == null)
        {
            SendResponseJson(new JObject { { "success", false }, { "error", "Invalid Params" } });
            return;
        }
        var oldProposal = ProposalQueue.Find(e => e.EmailAddress == emailAddress && e.JobId == jobId);
        if (oldProposal != null)
        {
            oldProposal.LoginJson = loginJson;
            oldProposal.LoginStatus = null;
            SendResponseJson(new JObject
            {
                { "success", true },
                { "updated", true },
                { "emailAddress", emailAddress },
                { "jobId", jobId },
                { "queueLength", ProposalQueue.Count},
            });
        }
        else
        {
            var url = $"https://www.upwork.com/ab/account-security/login?redir=%2Fab%2Fproposals%2Fjob%2F{jobId}%2Fapply%2F";
            var loginData = $"{url}\r\n{emailAddress}\r\n{jobId}";
            ProposalQueue.Add(new Proposal
            {
                EmailAddress = emailAddress,
                JobId = jobId,
                LoginData = loginData,
                LoginJson = loginJson
            });
            ApplyLogger.WriteLine($"{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss} \t Added login ({ProposalQueue.Count}):  {emailAddress}  {jobId}");
            var responseJson = new JObject
            {
                { "success", true },
                { "emailAddress", emailAddress },
                { "jobId", jobId },
                { "queueLength", ProposalQueue.Count},
            };
            SendResponseJson(responseJson);
        }
    }

    [Route(HttpVerbs.Put, "/login")]
    public void PutLogin([FormField] string? emailAddress, [FormField] string? jobId, [FormField] string? status)
    {
        AllowCORS();
        if (emailAddress == null || jobId == null)
        {
            SendResponseJson(new JObject { { "success", false }, { "error", "Invalid Params" } });
            return;
        }
        var oldProposal = ProposalQueue.Find(e => e.EmailAddress == emailAddress && e.JobId == jobId);
        if (oldProposal == null)
        {
            SendResponseJson(new JObject
            {
                { "success", false },
                { "error", "Not Exist" },
            });
        }
        else
        {
            oldProposal.LoginStatus = status;
            SendResponseJson(new JObject
            {
                { "success", true },
                { "applied", oldProposal.ApplyJson!=null },
                { "loginStatus", oldProposal.LoginStatus },
                { "applyStatus", oldProposal.ApplyStatus },
                { "queueLength", ProposalQueue.Count},
            });
            ApplyLogger.WriteLine($"{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss} \t Updated login status -> {status}:  {emailAddress}  {jobId}");
        }
    }

    [Route(HttpVerbs.Delete, "/login")]
    public void DeleteLogin([FormField] string? emailAddress, [FormField] string? jobId)
    {
        AllowCORS();
        var oldProposal = ProposalQueue.Find(e => e.EmailAddress == emailAddress && e.JobId == jobId);
        if (oldProposal == null)
        {
            SendResponseJson(new JObject
            {
                { "success", false },
                { "error", "Not Exist" },
            });
        }
        else
        {
            var removed = ProposalQueue.Remove(oldProposal);
            SendResponseJson(new JObject
            {
                { "success", removed },
                { "applied", oldProposal.ApplyJson!=null },
                { "loginStatus", oldProposal.LoginStatus },
                { "applyStatus", oldProposal.ApplyStatus },
                { "queueLength", ProposalQueue.Count},
            });
            ApplyLogger.WriteLine($"{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss} \t Deleted login ({ProposalQueue.Count}):  {emailAddress}  {jobId}");
        }
    }

    [Route(HttpVerbs.Options, "/login")]
    public void OptionsLogin()
    {
        AllowCORS();
    }


    [Route(HttpVerbs.Get, "/apply")]
    public void GetApply([QueryField] string? emailAddress, [QueryField] string? jobId)
    {
        AllowCORS();
        if (emailAddress == null || jobId == null)
        {
            SendResponseJson(new JObject { { "error", "Invalid Params" } });
            return;
        }
        foreach (var p in ProposalQueue)
        {
            if (p.EmailAddress == emailAddress && p.JobId == jobId && p.ApplyJson != null && p.ApplyStatus == null)
            {
                SendResponseJson(p.ApplyJson);
                return;
            }
        }
        //SendResponseJson(new JObject { { "error", "Not Found" } });
        SendResponseJson("{}");
    }

    [Route(HttpVerbs.Post, "/apply")]
    public void PostApply([FormField] string? emailAddress, [FormField] string? jobId, [FormField] string? applyJson)
    {
        AllowCORS();
        if (emailAddress == null || jobId == null || applyJson == null)
        {
            SendResponseJson(new JObject { { "success", false }, { "error", "Invalid Params" } });
            return;
        }
        var oldProposal = ProposalQueue.Find(e => e.EmailAddress == emailAddress && e.JobId == jobId);
        if (oldProposal == null)
        {
            SendResponseJson(new JObject { { "success", false }, { "error", "Not Exist" } });
            return;
        }
        SendResponseJson(new JObject
        {
            { "success", true },
            { "updated", oldProposal.ApplyJson!=null },
            { "jobId", jobId },
            { "emailAddress", emailAddress },
            { "queueLength", ProposalQueue.Count},
        });
        oldProposal.ApplyJson = applyJson;
        oldProposal.ApplyStatus = null;
        ApplyLogger.WriteLine($"{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss} \t Added apply ({ProposalQueue.Count}):  {emailAddress}  {jobId}");
    }

    [Route(HttpVerbs.Put, "/apply")]
    public void PutApply([FormField] string? emailAddress, [FormField] string? jobId, [FormField] string? status)
    {
        AllowCORS();
        if (emailAddress == null || jobId == null)
        {
            SendResponseJson(new JObject { { "success", false }, { "error", "Invalid Params" } });
            return;
        }
        var oldProposal = ProposalQueue.Find(e => e.EmailAddress == emailAddress && e.JobId == jobId);
        if (oldProposal == null)
        {
            SendResponseJson(new JObject
            {
                { "success", false },
                { "error", "Not Exist" },
            });
        }
        else
        {
            oldProposal.ApplyStatus = status;
            SendResponseJson(new JObject
            {
                { "success", true },
                { "applied", oldProposal.ApplyJson!=null },
                { "loginStatus", oldProposal.LoginStatus },
                { "applyStatus", oldProposal.ApplyStatus },
                { "queueLength", ProposalQueue.Count},
            });
            ApplyLogger.WriteLine($"{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss} \t Updated apply status -> {status}:  {emailAddress}  {jobId}");
        }
    }

    [Route(HttpVerbs.Delete, "/apply")]
    public void DeleteApply([FormField] string? emailAddress, [FormField] string? jobId)
    {
        AllowCORS();
        if (emailAddress == null || jobId == null)
        {
            SendResponseJson(new JObject { { "success", false }, { "error", "Invalid Params" } });
            return;
        }
        var oldProposal = ProposalQueue.Find(e => e.EmailAddress == emailAddress && e.JobId == jobId);
        if (oldProposal == null)
        {
            SendResponseJson(new JObject
            {
                { "success", false },
                { "error", "Not Exist" },
            });
        }
        else
        {
            SendResponseJson(new JObject
            {
                { "success", true },
                { "applied", oldProposal.ApplyJson!=null },
                { "loginStatus", oldProposal.LoginStatus },
                { "applyStatus", oldProposal.ApplyStatus },
                { "queueLength", ProposalQueue.Count},
            });
            oldProposal.ApplyJson = null;
            oldProposal.ApplyStatus = null;
            ApplyLogger.WriteLine($"{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss} \t Deleted apply ({ProposalQueue.Count}):  {emailAddress}  {jobId}");
        }
    }

    [Route(HttpVerbs.Options, "/apply")]
    public void OptionsApply()
    {
        AllowCORS();
    }

    [Route(HttpVerbs.Post, "/login-apply")]
    public void PostLoginApply([FormField] string? emailCategory, [FormField] string? emailNumber, [FormField] string? emailAddress, [FormField] string? password, [FormField] string? jobId, [FormField] string? loginJson, [FormField] string? applyJson)
    {
        AllowCORS();
        if (jobId == null || emailAddress == null || password == null || applyJson == null)
        {
            SendResponseJson(new JObject { { "success", false }, { "error", "Invalid Params" } });
            return;
        }
        var url = $"https://www.upwork.com/ab/account-security/login?redir=%2Fab%2Fproposals%2Fjob%2F{jobId}%2Fapply%2F";
        var LoginData = $"{url}\r\n{emailAddress}\r\n{jobId}";
        var oldProposal = ProposalQueue.Find(e => e.EmailAddress == emailAddress && e.JobId == jobId);
        if (oldProposal == null)
        {
            ProposalQueue.Add(new Proposal
            {
                EmailAddress = emailAddress,
                JobId = jobId,
                LoginData = LoginData,
                LoginJson = loginJson,
                ApplyJson = applyJson
            });
        }
        else
        {
            oldProposal.LoginData = LoginData;
            oldProposal.LoginJson = loginJson;
            oldProposal.LoginStatus = null;
            oldProposal.ApplyJson = applyJson;
            oldProposal.ApplyStatus = null;
        }
        SendResponseJson(new JObject
        {
            { "success", true },
            { "updated", oldProposal!=null },
            { "jobId", jobId },
            { "queueLength", ProposalQueue.Count},
        });
        ApplyLogger.WriteLine($"{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss} \t Added login-apply:  {emailAddress}  /  {jobId}");
    }

    [Route(HttpVerbs.Options, "/login-apply")]
    public void OptionsLoginApply()
    {
        AllowCORS();
    }

    [Route(HttpVerbs.Post, "/email-update")]
    public void PostEmailUpdate([FormField] string? emailAddress, [FormField] string? jobId, [FormField] string? newEmailAddress, [FormField] string? newLoginJson)
    {
        AllowCORS();
        if (jobId == null || emailAddress == null || newEmailAddress == null || newLoginJson == null)
        {
            SendResponseJson(new JObject { { "success", false }, { "error", "Invalid Params" } });
            return;
        }
        var url = $"https://www.upwork.com/ab/account-security/login?redir=%2Fab%2Fproposals%2Fjob%2F{jobId}%2Fapply%2F";
        var newLoginData = $"{url}\r\n{newEmailAddress}\r\n{jobId}";
        var oldProposal = ProposalQueue.Find(e => e.EmailAddress == emailAddress && e.JobId == jobId);
        if (oldProposal == null)
        {
            oldProposal = ProposalQueue.Find(e => e.EmailAddress == newEmailAddress && e.JobId == jobId);
            if (oldProposal == null)
            {
                ProposalQueue.Add(new Proposal
                {
                    EmailAddress = newEmailAddress,
                    JobId = jobId,
                    LoginData = newLoginData,
                    LoginJson = newLoginJson
                });
                ApplyLogger.WriteLine($"{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss} \t Added login email ({ProposalQueue.Count}):  {emailAddress} -> {newEmailAddress}  {jobId}");
            }
            else
            {
                oldProposal.LoginData = newLoginData;
                oldProposal.LoginJson = newLoginJson;
                oldProposal.LoginStatus = null;
                oldProposal.ApplyStatus = null;
                ApplyLogger.WriteLine($"{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss} \t Already updated login email ({ProposalQueue.Count}):  {emailAddress} -> {newEmailAddress}  {jobId}");
            }
        }
        else
        {
            oldProposal.EmailAddress = newEmailAddress;
            oldProposal.LoginData = newLoginData;
            oldProposal.LoginJson = newLoginJson;
            oldProposal.LoginStatus = null;
            oldProposal.ApplyStatus = null;
            ApplyLogger.WriteLine($"{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss} \t Updated login email ({ProposalQueue.Count}):  {emailAddress} -> {newEmailAddress}  {jobId}");
        }
        SendResponseJson(new JObject
        {
            { "success", true },
            { "emailAddress", emailAddress },
            { "newEmailAddress", newEmailAddress },
            { "jobId", jobId },
            { "queueLength", ProposalQueue.Count},
        });
    }

    [Route(HttpVerbs.Options, "/email-update")]
    public void OptionsEmailUpdate()
    {
        AllowCORS();
    }

    [Route(HttpVerbs.Get, "/queue")]
    public void GetQueue()
    {
        AllowCORS();
        SendResponseJson(JsonConvert.SerializeObject(ProposalQueue, Formatting.Indented));
    }

    [Route(HttpVerbs.Delete, "/queue")]
    public void DeleteQueue()
    {
        AllowCORS();
        var count = ProposalQueue.Count;
        ProposalQueue.Clear();
        SendResponseJson(new JObject
        {
            { "success", true },
            { "count", count},
        });
        ApplyLogger.WriteLine($"{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss} \t Cleared all queue data.");
    }

    [Route(HttpVerbs.Options, "/queue")]
    public void OptionsQueue()
    {
        AllowCORS();
    }

    [Route(HttpVerbs.Get, "/report")]
    public void GetReport()
    {
        AllowCORS();
        HttpContext.Redirect($"/report/{DateTime.UtcNow:yyyy-MM-dd}.txt");
    }

    [Route(HttpVerbs.Post, "/report")]
    public void PostReport([FormField] string emailAddress, [FormField] string jobId, [FormField] string? jobUrl, [FormField] string? title)
    {
        AllowCORS();
        File.AppendAllText($"www\\report\\{DateTime.UtcNow:yyyy-MM-dd}.txt", $"{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss}\t{emailAddress}\t{title}\t{jobUrl}" + Environment.NewLine);
        var oldProposal = ProposalQueue.Find(e => e.EmailAddress == emailAddress && e.JobId == jobId);
        var deletedFromQueue = false;
        if (oldProposal != null)
            deletedFromQueue = ProposalQueue.Remove(oldProposal);
        ApplyLogger.WriteLine($"{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss} \t Reported, deleted {deletedFromQueue} ({ProposalQueue.Count}):  {jobId}  /  {emailAddress}");
        SendResponseJson(new JObject
        {
            { "success", true },
            { "emailAddress", emailAddress },
            { "jobId", jobId },
            { "deletedFromQueue", deletedFromQueue },
        });
    }

    [Route(HttpVerbs.Options, "/report")]
    public void OptionsReport()
    {
        AllowCORS();
    }

}
