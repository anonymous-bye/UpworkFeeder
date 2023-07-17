using EmbedIO;
using EmbedIO.WebApi;
using EmbedIO.Routing;
using Valloon.UpworkFeeder2.Models;
using Microsoft.EntityFrameworkCore;
using System.Globalization;
using System.Text.RegularExpressions;
using System.Linq;

namespace Valloon.UpworkFeeder2.Controllers
{

    /**
     * @author Valloon Present
     * @version 2023-06-23
     * https://github.com/unosquare/embedio
     * https://github.com/unosquare/embedio/wiki/Cookbook
     * https://michaelscodingspot.com/postgres-in-csharp/
     * https://stackoverflow.com/questions/49057129/entity-framework-core-using-order-by-in-query-against-a-ms-sql-server
     * https://stackoverflow.com/questions/21592596/update-multiple-rows-in-entity-framework-from-a-list-of-ids
     * https://stackoverflow.com/questions/2519866/how-do-i-delete-multiple-rows-in-entity-framework-without-foreach
     * https://stackoverflow.com/questions/10913396/entity-framework-where-order-and-group
     * https://www.educba.com/entity-framework-group-by/
     * https://www.tektutorialshub.com/entity-framework/join-query-entity-framework/
     */
    internal class ApiV2Controller : BaseController
    {
        private Logger AccountLogger
        {
            get
            {
                var logger = new Logger($"{DateTime.UtcNow:yyyy-MM-dd}", "log-account");
                var requestUrl = HttpContext.Request.Url.ToString();
                logger.WriteLine($"[{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss}]\t{requestUrl}", ConsoleColor.DarkGray);
                return logger;
            }
        }

        private Logger ApplyLogger
        {
            get
            {
                var logger = new Logger($"{DateTime.UtcNow:yyyy-MM-dd}", "log-apply");
                var requestUrl = HttpContext.Request.Url.ToString();
                logger.WriteLine($"[{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss}]\t{requestUrl}", ConsoleColor.DarkGray);
                return logger;
            }
        }

        [Route(HttpVerbs.Get, "/account/check/next")]
        public async Task<object?> GetAccountCheckNext()
        {
            using var db = new UpworkContext();
            return await db.Accounts!.Where(x => x.Connects == null).OrderBy(x => x.Email).FirstOrDefaultAsync();
        }

        [Route(HttpVerbs.Post, "/account/{email}/email-verify")]
        public object PostEmailVerify(string email, [FormField] string login, [FormField] string p)
        {
            try
            {
                var verifyUrl = EmailReader.GetEmailVerifyUrl(login, p, email);
                if (verifyUrl == null)
                {
                    AccountLogger.WriteLine($"{email} \t <Email not received>", ConsoleColor.DarkYellow);
                    return new { success = false, error = $"Email not received: {email}" };
                }
                else
                {
                    AccountLogger.WriteLine($"Email verified: {email} \t {verifyUrl}", ConsoleColor.Green);
                    return new { success = true, url = verifyUrl };
                }
            }
            catch (Exception ex)
            {
                AccountLogger.WriteLine($"{email} \t {ex.Message}", ConsoleColor.Red);
                return new { success = false, error = ex.Message };
            }
        }

        [Route(HttpVerbs.Post, "/account/{email}/new")]
        public async Task<object> PostAccountNew(string? email, [FormField] string? password, [FormField] string? profile, [FormField] string? profileTitle, [FormField] string? state, [FormField] string? ip)
        {
            if (email == null || password == null)
            {
                AccountLogger.WriteLine($"Invalid Params: {email} / {password}");
                return new { success = false, error = "Invalid Params" };
            }
            if (string.IsNullOrWhiteSpace(state)) state = null;
            ip ??= Request.RemoteEndPoint.Address.ToString().Split(":").Last();
            if (profile != null) AccountChannelDictionary.Remove(profile);
            using var db = new UpworkContext();
            var account = await db.Accounts!.SingleOrDefaultAsync(x => x.Email == email);
            if (account == null)
            {
                await db.Accounts!.AddAsync(new Account
                {
                    Email = email,
                    Password = password,
                    Profile = profile,
                    ProfileTitle = profileTitle,
                    State = state,
                    CreatedDate = DateTime.UtcNow,
                    CreatedIp = ip
                });
            }
            else
            {
                account.Password = password;
                account.Profile = profile;
                account.ProfileTitle = profileTitle;
                account.State = state;
                if (account.CreatedIp == null && ip != null) account.CreatedIp = ip;
                db.Entry(account).CurrentValues.SetValues(account);
            }
            await db.SaveChangesAsync();
            AccountLogger.WriteLine($"new account registered: {email}");
            return new { success = true, email };
        }

        [Route(HttpVerbs.Put, "/account/{email}/state")]
        public async Task<object> PutAccountState(string? email, [FormField] string? state)
        {
            if (email == null)
            {
                ApplyLogger.WriteLine($"Invalid Params: {email}");
                return new { success = false, error = "Invalid Params" };
            }
            if (string.IsNullOrWhiteSpace(state)) state = null;
            using var db = new UpworkContext();
            var account = await db.Accounts!.SingleOrDefaultAsync(x => x.Email == email);
            if (account == null)
            {
                ApplyLogger.WriteLine($"Not Exist: {email}");
                return new { success = false, error = "Not Exist" };
            }
            account.State = state;
            db.Entry(account).CurrentValues.SetValues(account);
            await db.SaveChangesAsync();
            ApplyLogger.WriteLine($"Updated account state -> {state}: {email}");
            return new { success = true };
        }

        [Route(HttpVerbs.Put, "/account/{email}/all")]
        public async Task<object> PutAccountAll(string? email, [FormField] string? password, [FormField] string? profile, [FormField] string? state, [FormField] int? connects, [FormField] string? risingTalent, [FormField] string? profileTitle)
        {
            if (email == null)
            {
                ApplyLogger.WriteLine($"Invalid Params: {email}");
                return new { success = false, error = "Invalid Params" };
            }
            if (string.IsNullOrWhiteSpace(password)) password = null;
            if (string.IsNullOrWhiteSpace(profile)) profile = null;
            if (string.IsNullOrWhiteSpace(state)) state = null;
            if (string.IsNullOrWhiteSpace(risingTalent)) risingTalent = null;
            if (string.IsNullOrWhiteSpace(profileTitle)) profileTitle = null;
            using var db = new UpworkContext();
            var account = await db.Accounts!.SingleOrDefaultAsync(x => x.Email == email);
            if (account == null)
            {
                ApplyLogger.WriteLine($"Not Exist: {email}");
                return new { success = false, error = "Not Exist" };
            }
            if (password != null) account.Password = password;
            if (profile != null) account.Profile = profile;
            if (state != null) account.State = state;
            if (connects != null) account.Connects = connects;
            if (risingTalent != null) account.RisingTalent = risingTalent;
            if (profileTitle != null) account.ProfileTitle = profileTitle;
            db.Entry(account).CurrentValues.SetValues(account);
            await db.SaveChangesAsync();
            ApplyLogger.WriteLine($"Updated account: {email}");
            return new { success = true, account };
        }

        [Route(HttpVerbs.Get, "/account/live")]
        public async Task GetAccountLive()
        {
            using var db = new UpworkContext();
            //var profileList = await db.Profiles!.OrderBy(x => x.Symbol).ToListAsync();
            //string resultText = $"";
            //foreach (var profile in profileList)
            //{
            //    var countAllMinMax = await db.Accounts!.Where(x => x.Profile == profile.Id).GroupBy(_ => 1, (_, records) => new
            //    {
            //        Count = records.Count(),
            //        Min = records.Min(x => x.Email),
            //        Max = records.Max(x => x.Email),
            //        LastCreated = records.Max(x => x.CreatedDate)
            //    }).Select(x => new { x.Count, x.Min, x.Max, x.LastCreated }).FirstOrDefaultAsync();
            //    var countMinMax = await db.Accounts!.Where(x => x.Profile == profile.Id && x.State == null).GroupBy(_ => 1, (_, records) => new
            //    {
            //        Count = records.Count(),
            //        Min = records.Min(x => x.Email),
            //        Max = records.Max(x => x.Email),
            //        FirstCreated = records.Min(x => x.CreatedDate)
            //    }).Select(x => new { x.Count, x.Min, x.Max, x.FirstCreated }).FirstOrDefaultAsync();
            //    string? spanText = null;
            //    if (countMinMax != null && countMinMax!.FirstCreated != null)
            //    {
            //        var span = DateTime.UtcNow - countMinMax!.FirstCreated!.Value;
            //        if (span.TotalHours < 24)
            //            spanText = span.ToString("hh\\:mm\\:ss");
            //        else
            //            spanText = $"{span.TotalHours:N0}+";
            //    }
            //    int liveCount = countMinMax == null ? 0 : countMinMax.Count;
            //    int requireCount = profile.RequireCount == null ? 0 : profile.RequireCount.Value;
            //    var ratio = requireCount == 0 ? 0 : liveCount * 100.0 / requireCount;
            //    int allCount = countAllMinMax == null ? 0 : countAllMinMax.Count;
            //    resultText += $"{liveCount} / {requireCount} = {ratio:N2} %\t\t{countAllMinMax?.Min?.Split("@")[0]}  ~  {countAllMinMax?.Max?.Split("@")[0]}\t\t{countMinMax?.Min?.Split("@")[0]}  ~  {countMinMax?.Max?.Split("@")[0]}\t\t[{countMinMax?.FirstCreated:yyyy-MM-dd HH:mm:ss}][{countAllMinMax?.LastCreated:yyyy-MM-dd HH:mm:ss}][{spanText}]\t\t<{profile.Symbol}> {profile.Id} ({profile.Title})    {profile.State}\n\n";
            //}
            var profileList = await db.RawSqlQueryAsync(@"
SELECT * from tbl_profile
left join (SELECT profile, count(*) all_count, min(email) min_email, max(email) max_email from tbl_account group by profile) tbl_all on tbl_profile.id=tbl_all.profile
left join (SELECT profile, count(*) live_count, min(email) live_min_email, max(email) live_max_email, min(created_date) min_created_date, max(created_date) max_created_date from tbl_account where state is null group by profile) tbl_live on tbl_profile.id=tbl_live.profile
left join (SELECT profile, count(*) live24_count from tbl_account where state is null and created_date<NOW() - INTERVAL '24 hours' group by profile) tbl_live24 on tbl_profile.id=tbl_live24.profile
order by symbol
",
                x => new
                {
                    Id = UpworkContext.GetValue<string>(x["id"]),
                    Symbol = UpworkContext.GetValue<string>(x["symbol"]),
                    Title = UpworkContext.GetValue<string>(x["title"]),
                    Channel = UpworkContext.GetValue<string>(x["channel"]),
                    RequireCount = UpworkContext.GetValue<int>(x["require_count"]),
                    State = UpworkContext.GetValue<string>(x["state"]),
                    AllCount = UpworkContext.GetValue<int>(x["all_count"]),
                    MinEmail = UpworkContext.GetValue<string>(x["min_email"]),
                    MaxEmail = UpworkContext.GetValue<string>(x["max_email"]),
                    LiveCount = UpworkContext.GetValue<int>(x["live_count"]),
                    LiveMinEmail = UpworkContext.GetValue<string>(x["live_min_email"]),
                    LiveMaxEmail = UpworkContext.GetValue<string>(x["live_max_email"]),
                    MinCreatedDate = UpworkContext.GetValue<DateTime>(x["min_created_date"]),
                    MaxCreatedDate = UpworkContext.GetValue<DateTime>(x["max_created_date"]),
                    Live24Count = UpworkContext.GetValue<int>(x["live24_count"]),
                });
            if (profileList == null || profileList.Count == 0)
            {
                AccountLogger.WriteLine($"None");
                await HttpContext.SendStringAsync("None");
                return;
            }
            string resultText = $"";
            foreach (var p in profileList)
            {
                var ratio = p.RequireCount == 0 ? 0 : p.LiveCount * 100.0 / p.RequireCount;
                resultText += $"{p.Live24Count}\t{p.LiveCount} / {p.RequireCount} = {ratio:N2} %\t\t{p.MinEmail?.Split("@")[0]}  ~  {p.MaxEmail?.Split("@")[0]}\t\t{p.LiveMinEmail?.Split("@")[0]}  ~  {p.LiveMaxEmail?.Split("@")[0]}\t\t[{p.MinCreatedDate:yyyy-MM-dd HH:mm:ss}][{p.MaxCreatedDate:yyyy-MM-dd HH:mm:ss}]\t\t<{p.Symbol}> {p.Id} ({p.Title})    {p.State}\n\n";
            }
            await HttpContext.SendStringAsync(resultText);
        }

        [Route(HttpVerbs.Get, "/account/need")]
        public async Task GetAccountNeed()
        {
            using var db = new UpworkContext();
            var profileList = await db.RawSqlQueryAsync($"SELECT id,live_count,require_count,live_count*1.0/require_count ratio,min_number,max_number,max_email,script_filename FROM (SELECT tbl_profile.*, (SELECT count(*) live_count from tbl_account where profile=id and state is null) live_count, (SELECT max(email) max_email from tbl_account where tbl_account.profile=id) FROM tbl_profile) tbl_1 WHERE live_count<require_count order by ratio",
                x => new
                {
                    Id = UpworkContext.GetValue<string>(x["id"]),
                    MinNumber = UpworkContext.GetValue<int>(x["min_number"]),
                    MaxNumber = UpworkContext.GetValue<int>(x["max_number"]),
                    MaxEmail = UpworkContext.GetValue<string>(x["max_email"]),
                    ScriptFilename = UpworkContext.GetValue<string>(x["script_filename"])
                });
            if (profileList == null || profileList.Count == 0)
            {
                AccountLogger.WriteLine($"None");
                await HttpContext.SendStringAsync("None");
                return;
            }
            int? nextNumber = null;
            string? scriptFilename = null;
            foreach (var p in profileList)
            {
                if (p.MaxEmail == null)
                {
                    nextNumber = p.MinNumber;
                    scriptFilename = p.ScriptFilename;
                    break;
                }
                var nextNumberExpected = int.Parse(Regex.Replace(p.MaxEmail, @"[^0-9]+", "")) + 1;
                if (nextNumberExpected <= p.MaxNumber)
                {
                    nextNumber = Math.Max(p.MinNumber, nextNumberExpected);
                    scriptFilename = p.ScriptFilename;
                    break;
                }
                AccountLogger.WriteLine($"Full in profile: {p.Id}");
                var profileRecord = await db.Profiles!.SingleOrDefaultAsync(x => x.Id == p.Id);
                if (profileRecord == null)
                {
                    ApplyLogger.WriteLine($"Profile Not Exist: {p.Id}");
                    await HttpContext.SendStringAsync($"Profile Not Exist: {p.Id}");
                    continue;
                }
                profileRecord.State = "full";
                db.Entry(profileRecord).CurrentValues.SetValues(profileRecord);
                await db.SaveChangesAsync();
            }
            if (nextNumber == null || scriptFilename == null)
            {
                AccountLogger.WriteLine($"None, maybe full");
                await HttpContext.SendStringAsync("None, maybe full");
                return;
            }
            await HttpContext.SendStringAsync($"{nextNumber}/{scriptFilename}");
        }

        [Route(HttpVerbs.Get, "/account/need2")]
        public async Task<object> GetAccountNeed2([QueryField] int? channel)
        {
            using var db = new UpworkContext();
            var profileList = await db.RawSqlQueryAsync($"SELECT id,live_count,require_count,live_count*1.0/require_count ratio,min_number,max_number,max_email,script_filename FROM (SELECT tbl_profile.*, (SELECT count(*) live_count from tbl_account where profile=id and state is null) live_count, (SELECT max(email) max_email from tbl_account where tbl_account.profile=id) FROM tbl_profile) tbl_1 WHERE live_count<require_count order by ratio",
                x => new
                {
                    Id = UpworkContext.GetValue<string>(x["id"]),
                    MinNumber = UpworkContext.GetValue<int>(x["min_number"]),
                    MaxNumber = UpworkContext.GetValue<int>(x["max_number"]),
                    MaxEmail = UpworkContext.GetValue<string>(x["max_email"]),
                    ScriptFilename = UpworkContext.GetValue<string>(x["script_filename"]),
                    LiveCount = UpworkContext.GetValue<int>(x["live_count"]),
                    RequireCount = UpworkContext.GetValue<int>(x["require_count"]),
                    Ratio = UpworkContext.GetValue<double>(x["ratio"]),
                });
            if (profileList == null || profileList.Count == 0)
            {
                AccountLogger.WriteLine($"None");
                return new { success = false, error = "None" };
            }
            int? nextNumber = null;
            string? scriptFilename = null;
            object? x = null;
            foreach (var p in profileList)
            {
                var c = AccountChannelDictionary.GetValueOrDefault(p.Id!);
                if (c == null || c.Channel == channel || (DateTime.UtcNow - c.Time).TotalMinutes > 5)
                {
                    AccountChannelDictionary[p.Id!] = new AccountChannel
                    {
                        Channel = channel ?? 0,
                        Time = DateTime.UtcNow
                    };
                }
                else
                {
                    continue;
                }
                if (p.MaxEmail == null)
                {
                    nextNumber = p.MinNumber;
                    scriptFilename = p.ScriptFilename;
                    x = p;
                    break;
                }
                var nextNumberExpected = int.Parse(Regex.Replace(p.MaxEmail, @"[^0-9]+", "")) + 1;
                if (nextNumberExpected <= p.MaxNumber)
                {
                    nextNumber = Math.Max(p.MinNumber, nextNumberExpected);
                    scriptFilename = p.ScriptFilename;
                    x = p;
                    break;
                }
                AccountLogger.WriteLine($"Full in profile: {p.Id}");
                var profileRecord = await db.Profiles!.SingleOrDefaultAsync(x => x.Id == p.Id);
                if (profileRecord == null)
                {
                    ApplyLogger.WriteLine($"Profile Not Exist: {p.Id}");
                    await HttpContext.SendStringAsync($"Profile Not Exist: {p.Id}");
                    continue;
                }
                profileRecord.State = "full";
                db.Entry(profileRecord).CurrentValues.SetValues(profileRecord);
                await db.SaveChangesAsync();
            }
            if (nextNumber == null || scriptFilename == null)
            {
                AccountLogger.WriteLine($"None, maybe full");
                return new { success = false, error = "None, maybe full" };
            }
            return new { success = true, nextNumber, scriptFilename, x };
        }

        [Route(HttpVerbs.Get, "/account/history/{date?}")]
        public async Task GetAccountHistoryToday(string? date)
        {
            if (date == null || date == "" || date == "today")
            {
                HttpContext.Redirect($"/api/v2/account/history/{DateTime.UtcNow:yyyy-MM-dd}");
                return;
            }
            var startDateTime = DateTime.ParseExact(date, "yyyy-MM-dd", CultureInfo.InvariantCulture);
            var endDateTime = startDateTime.AddDays(1);
            using var db = new UpworkContext();
            db.ChangeTracker.Clear();
            var list = await db.Accounts!.Where(x => x.CreatedDate >= startDateTime && x.CreatedDate < endDateTime).OrderBy(x => x.CreatedDate).ToListAsync();
            int count = list.Count;
            string resultText = $"";
            for (int i = 0; i < count; i++)
            {
                var item = list[i];
                string? spanText;
                if (i > 0 && item.CreatedDate != null && list[i - 1].CreatedDate != null)
                {
                    var span = item.CreatedDate!.Value - list[i - 1].CreatedDate!.Value;
                    if (span.TotalMinutes < 60)
                        spanText = span.ToString("mm\\:ss");
                    else
                        spanText = $"{span.TotalMinutes:N0}+";
                }
                else
                    spanText = "\t";
                resultText = $"{i + 1}\t[{item.CreatedDate:HH:mm:ss}][{spanText}]  {item.CreatedIp}\t{item.Email?.Split("@")[0]}\t\t<{item.Profile}>\t{item.ProfileTitle}\t<{item.State}>\n" + resultText;
            }
            {
                string? spanText;
                Account lastItem;
                if (list.Count > 0 && (lastItem = list.Last()) != null && lastItem.CreatedDate != null)
                {
                    var span = DateTime.UtcNow - lastItem.CreatedDate.Value;
                    if (span.TotalMinutes < 60)
                        spanText = span.ToString("mm\\:ss");
                    else
                        spanText = $"{span.TotalMinutes:N0}+";
                }
                else
                    spanText = "\t";
                resultText = $"[{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss}][{spanText}]\n{resultText}";
            }
            await HttpContext.SendStringAsync(resultText);
        }

        [Route(HttpVerbs.Get, "/apply/next")]
        public async Task<object> GetApplyNext([QueryField] string? channels)
        {
            using var db = new UpworkContext();
            Application? application;
            if (channels == null || channels == "0")
            {
                application = await db.Applications!.Where(x => x.ProposalJson != null && x.State == null).OrderBy(x => x.Priority).ThenBy(x => x.CreatedDate).FirstOrDefaultAsync();
                application ??= await db.Applications!.Where(x => x.State == null).OrderBy(x => x.Priority).ThenBy(x => x.CreatedDate).FirstOrDefaultAsync();
            }
            else
            {
                int[] channelArray = channels.Split(',').Select(n => Convert.ToInt32(n)).ToArray();
                application = await db.Applications!.Where(x => x.ProposalJson != null && x.State == null && x.Channel != null && channelArray.Contains(x.Channel.Value)).OrderByDescending(x => x.Priority).ThenBy(x => x.CreatedDate).FirstOrDefaultAsync();
                application ??= await db.Applications!.Where(x => x.State == null && x.Channel != null && channelArray.Contains(x.Channel.Value)).OrderByDescending(x => x.Priority).ThenBy(x => x.CreatedDate).FirstOrDefaultAsync();
            }
            if (application == null)
                return new { success = false };
            var profile = application.Profile;
            if (application.Email == $"<{profile}>")
            {
                while (true)
                {
                    var nextAccount = await db.Accounts!.Where(x => x.Profile == profile && x.State == null).OrderBy(x => x.CreatedDate).FirstOrDefaultAsync();
                    if (nextAccount == null || nextAccount.CreatedDate != null && (DateTime.UtcNow - nextAccount.CreatedDate.Value).TotalHours < 24)
                    {
                        ApplyLogger.WriteLine($"Email Overflow!: {application.JobId} / {profile}");
                        application.State = "$email-overflow";
                        db.Entry(application).CurrentValues.SetValues(application);
                        await db.SaveChangesAsync();
                        return new { success = false, profile, error = "Email Overflow!" };
                    }
                    var lastApplied = await db.Applications!.Where(x => x.Email == nextAccount.Email).OrderBy(x => x.CreatedDate).FirstOrDefaultAsync();
                    if (lastApplied == null)
                    {
                        db.Applications!.Remove(application);
                        await db.SaveChangesAsync();
                        application.Email = nextAccount.Email;
                        application.Password = nextAccount.Password;
                        await db.Applications!.AddAsync(application);
                        await db.SaveChangesAsync();
                        ApplyLogger.WriteLine($"Nexy by profile: {profile} / {application.Email} / {application.JobId}");
                        break;
                    }
                    ApplyLogger.WriteLine($"next account already used: {nextAccount.Email}");
                    nextAccount.State = lastApplied.JobId;
                    db.Entry(nextAccount).CurrentValues.SetValues(nextAccount);
                    await db.SaveChangesAsync();
                }
            }
            return new
            {
                success = true,
                email = application.Email,
                jobId = application.JobId,
                password = application.Password,
                profile = application.Profile,
                proposalJson = application.ProposalJson,
                state = application.State
            };
        }

        [Route(HttpVerbs.Put, "/apply/retry-queue")]
        public async Task<object> PutApplyRetryQueue()
        {
            using var db = new UpworkContext();
            var count = await db.Applications!.Where(x => x.State != null && x.State.StartsWith("$")).ExecuteUpdateAsync(x => x.SetProperty(x => x.State, x => null));
            ApplyLogger.WriteLine($"Retry queue: {count}");
            return new { success = true, count };
        }

        [Route(HttpVerbs.Delete, "/apply/clear-queue")]
        public async Task<object> DeleteApplyClearQueue()
        {
            using var db = new UpworkContext();
            //db.Applications!.RemoveRange(db.Applications.Where(x => x.State != Application.STATE_SUCCESS));
            //await db.SaveChangesAsync();
            var count = await db.Applications!.Where(x => x.State != Application.STATE_SUCCESS).ExecuteDeleteAsync();
            ApplyLogger.WriteLine($"Cleared queue: {count}");
            return new { success = true, count };
        }

        [Route(HttpVerbs.Get, "/apply/history/{date?}")]
        public async Task GetApplyHistoryToday(string? date)
        {
            if (date == null || date == "" || date == "today")
            {
                HttpContext.Redirect($"/api/v2/apply/history/{DateTime.UtcNow:yyyy-MM-dd}");
                return;
            }
            var startDateTime = DateTime.ParseExact(date, "yyyy-MM-dd", CultureInfo.InvariantCulture);
            var endDateTime = startDateTime.AddDays(1);
            using var db = new UpworkContext();
            db.ChangeTracker.Clear();
            var list = await db.Applications!.Where(x => x.CreatedDate >= startDateTime && x.CreatedDate < endDateTime).OrderBy(x => x.CreatedDate).ToListAsync();
            int count = list.Count;
            string resultText = $"";
            int successCount = 0;
            for (int i = 0; i < count; i++)
            {
                var item = list[i];
                if (item.State == Application.STATE_SUCCESS) successCount++;
                resultText = $"{(item.State == Application.STATE_SUCCESS ? successCount : "")}\t[{item.UpdatedDate ?? item.CreatedDate:HH:mm:ss}][{item.SucceedDate:HH:mm:ss}][{item.SucceedDate - item.CreatedDate:mm\\:ss}]/{item.Channel}/{item.Priority} \t{item.Email?.Split("@")[0]}\t{item.JobId}\t{item.Profile}/{item.Channel}\t<{item.State}>\t<{item.JobCountry}> {item.JobTitle}\n" + resultText;
            }
            {
                string? spanText;
                Application lastItem;
                if (list.Count > 0 && (lastItem = list.Last()) != null && lastItem.CreatedDate != null)
                {
                    var span = DateTime.UtcNow - lastItem.CreatedDate.Value;
                    if (span.TotalMinutes < 60)
                        spanText = span.ToString("mm\\:ss");
                    else
                        spanText = $"{span.TotalMinutes:N0}+";
                }
                else
                    spanText = "\t";
                resultText = $"[{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss}][{spanText}]\n{resultText}";
            }
            await HttpContext.SendStringAsync(resultText);
        }

        [Route(HttpVerbs.Get, "/apply/{email}/{jobId}/")]
        public async Task<object> GetApply(string? email, string? jobId)
        {
            if (email == null || jobId == null)
            {
                ApplyLogger.WriteLine($"Invalid Params: {email} / {jobId}");
                return new { success = false, error = "Invalid Params" };
            }
            using var db = new UpworkContext();
            var application = await db.Applications!.SingleOrDefaultAsync(x => x.Email == email && x.JobId == jobId);
            if (application == null)
            {
                ApplyLogger.WriteLine($"Not Exist: {email} / {jobId}");
                return new { success = false, error = "Not Exist" };
            }
            return new
            {
                success = true,
                email = application.Email,
                jobId = application.JobId,
                profile = application.Profile,
                password = application.Password,
                proposalJson = application.ProposalJson,
                state = application.State
            };
        }

        [Route(HttpVerbs.Post, "/apply/$/{profile}/{jobId}/")]
        public async Task<object> PostApplyByProfile(string? profile, string? jobId, [FormField] string? proposalJson, [FormField] string? jobTitle, [FormField] string? jobCountry, [FormField] int? priority, [FormField] int? channel, [FormField] string? state, [FormField] int? preventOverwrite)
        {
            if (jobId == null || profile == null)
            {
                ApplyLogger.WriteLine($"Invalid Params: {profile} / {jobId} / {state}");
                return new { success = false, error = "Invalid Params" };
            }
            if (string.IsNullOrWhiteSpace(state)) state = null;
            if (string.IsNullOrWhiteSpace(jobTitle)) jobTitle = null;
            if (string.IsNullOrWhiteSpace(jobCountry)) jobCountry = null;
            using var db = new UpworkContext();
            if (profile.StartsWith("$"))
            {
                var profileSymbol = profile.Substring(1);
                var profileObject = await db.Profiles!.SingleOrDefaultAsync(x => x.Symbol == profileSymbol);
                if (profileObject == null)
                {
                    ApplyLogger.WriteLine($"Profile Not Exist: {profile} / {jobId} / {state}");
                    return new { success = false, error = $"Profile Not Exist: {profile}" };
                }
                profile = profileObject.Id;
                channel ??= profileObject.Channel;
            }
            else
            {
                var profileObject = await db.Profiles!.SingleOrDefaultAsync(x => x.Id == profile);
                if (profileObject == null)
                {
                    ApplyLogger.WriteLine($"Profile Not Exist: {profile} / {jobId} / {state}");
                    return new { success = false, error = $"Profile Not Exist: {profile}" };
                }
                channel ??= profileObject.Channel;
            }
            var lastApply = await db.Applications!.SingleOrDefaultAsync(x => x.Profile == profile && x.JobId == jobId);
            if (lastApply == null)
            {
                priority ??= 0;
                channel ??= 0;
                await db.Applications!.AddAsync(new Application
                {
                    Email = $"<{profile}>",
                    JobId = jobId,
                    Profile = profile,
                    ProposalJson = proposalJson,
                    JobTitle = jobTitle,
                    JobCountry = jobCountry,
                    Priority = priority,
                    Channel = channel,
                    State = state,
                    CreatedDate = DateTime.UtcNow
                });
                await db.SaveChangesAsync();
                ApplyLogger.WriteLine($"added application by profile: {profile} / {jobId} / {state}");
                return new { success = true, jobId, profile, updated = false };
            }
            else if (lastApply.State == Application.STATE_SUCCESS)
            {
                //ApplyLogger.WriteLine($"Already applied by profile: {profile} / {jobId} / {state}");
                return new { success = true, already = true, priority = lastApply.Priority, channel = lastApply.Channel };
            }
            else if (preventOverwrite != null && preventOverwrite == 1)
            {
                //ApplyLogger.WriteLine($"Already applied by profile: {profile} / {jobId} / {state}");
                return new { success = true, already = true, preventOverwrite, priority = lastApply.Priority, channel = lastApply.Channel };
            }
            else
            {
                lastApply.ProposalJson = proposalJson;
                if (jobTitle != null) lastApply.JobTitle = jobTitle;
                if (jobCountry != null) lastApply.JobCountry = jobCountry;
                if (priority != null) lastApply.Priority = priority;
                if (channel != null) lastApply.Channel = channel;
                lastApply.State = state;
                lastApply.UpdatedDate = DateTime.UtcNow;
                db.Entry(lastApply).CurrentValues.SetValues(lastApply);
                await db.SaveChangesAsync();
                ApplyLogger.WriteLine($"Updated application by profile: {profile} / {jobId} / {state}");
                return new { success = true, jobId, profile, updated = true };
            }
        }

        [Route(HttpVerbs.Delete, "/apply/$/{profile}/{jobId}/")]
        public async Task<object> DeleteApplyByProfile(string? profile, string? jobId, [FormField] string? message)
        {
            if (profile == null || jobId == null)
            {
                ApplyLogger.WriteLine($"Invalid Params: {profile} / {jobId} / {message}");
                return new { success = false, error = "Invalid Params" };
            }
            using var db = new UpworkContext();
            if (profile.StartsWith("$"))
            {
                var profileSymbol = profile.Substring(1);
                var profileObject = await db.Profiles!.SingleOrDefaultAsync(x => x.Symbol == profileSymbol);
                if (profileObject == null)
                {
                    ApplyLogger.WriteLine($"Profile Not Exist: {profile} / {jobId}");
                    return new { success = false, error = $"Profile Not Exist: {profile}" };
                }
                profile = profileObject.Id;
            }
            var lastApply = await db.Applications!.SingleOrDefaultAsync(x => x.Email == $"<{profile}>" && x.Profile == profile && x.JobId == jobId);
            if (lastApply == null)
            {
                ApplyLogger.WriteLine($"Not Exist or already applied: <{profile}> / {jobId} / {message}");
                return new { success = false, error = "Not Exist or already applied" };
            }
            else if (lastApply.State == Application.STATE_SUCCESS)
            {
                return new { success = false, error = "Already applied" };
            }
            db.Applications!.Remove(lastApply);
            await db.SaveChangesAsync();
            ApplyLogger.WriteLine($"Deleted application by profile: {profile} / {jobId} / {message}");
            return new { success = true, jobId, profile };
        }

        [Route(HttpVerbs.Post, "/apply/{email}/{jobId}/")]
        public async Task<object> PostApplyByEmail(string? email, string? jobId, [FormField] string? password, [FormField] string? proposalJson, [FormField] string? jobTitle, [FormField] string? jobCountry, [FormField] int? priority, [FormField] int? channel, [FormField] string? state, [FormField] int? preventOverwrite)
        {
            if (email == null || jobId == null || password == null)
            {
                ApplyLogger.WriteLine($"Invalid Params: {email} / {jobId} / {password} / {state}");
                return new { success = false, error = "Invalid Params" };
            }
            if (string.IsNullOrWhiteSpace(state)) state = null;
            if (string.IsNullOrWhiteSpace(jobTitle)) jobTitle = null;
            if (string.IsNullOrWhiteSpace(jobCountry)) jobCountry = null;
            using var db = new UpworkContext();
            Application? lastApply = await db.Applications!.SingleOrDefaultAsync(x => x.Email == email && x.JobId == jobId);
            if (lastApply == null)
            {
                channel ??= 0;
                priority ??= 0;
                await db.Applications!.AddAsync(new Application
                {
                    Email = email,
                    JobId = jobId,
                    Password = password,
                    ProposalJson = proposalJson,
                    JobTitle = jobTitle,
                    JobCountry = jobCountry,
                    Priority = priority,
                    Channel = channel,
                    State = state,
                    CreatedDate = DateTime.UtcNow
                });
                await db.SaveChangesAsync();
                ApplyLogger.WriteLine($"added application by email: {email} / {jobId}");
            }
            else if (lastApply.State == Application.STATE_SUCCESS)
            {
                //ApplyLogger.WriteLine($"Already applied by email: {email} / {jobId} / {state}");
                return new { success = true, already = true, priority = lastApply.Priority, channel = lastApply.Channel };
            }
            else if (preventOverwrite != null && preventOverwrite == 1)
            {
                //ApplyLogger.WriteLine($"Already applied by profile: {profile} / {jobId} / {state}");
                return new { success = true, already = true, preventOverwrite, priority = lastApply.Priority, channel = lastApply.Channel };
            }
            else
            {
                lastApply.Password = password;
                lastApply.ProposalJson = proposalJson;
                if (jobTitle != null) lastApply.JobTitle = jobTitle;
                if (jobCountry != null) lastApply.JobCountry = jobCountry;
                if (priority != null) lastApply.Priority = priority;
                if (channel != null) lastApply.Channel = channel;
                lastApply.State = state;
                lastApply.UpdatedDate = DateTime.UtcNow;
                db.Entry(lastApply).CurrentValues.SetValues(lastApply);
                await db.SaveChangesAsync();
                ApplyLogger.WriteLine($"updated application by email: {email} / {jobId}");
            }
            return new { success = true, email, jobId, updated = lastApply != null };
        }

        //[Route(HttpVerbs.Put, "/apply/{email}/{jobId}/proposal")]
        //public async Task<object> PutApplyProposal(string? email, string? jobId, [FormField] string? proposalJson)
        //{
        //    if (email == null || jobId == null)
        //    {
        //        ApplyLogger.WriteLine($"Invalid Params: {email} / {jobId}");
        //        return new { success = false, error = "Invalid Params" };
        //    }
        //    using var db = new UpworkContext();
        //    var lastApply = await db.Applications!.SingleOrDefaultAsync(x => x.Email == email && x.JobId == jobId);
        //    if (lastApply == null)
        //    {
        //        ApplyLogger.WriteLine($"Not Exist: {email} / {jobId}");
        //        return new { success = false, error = "Not Exist" };
        //    }
        //    if (lastApply.State == Application.STATE_SUCCESS)
        //    {
        //        ApplyLogger.WriteLine($"Already applied: {email} / {jobId}");
        //        return new { success = false, error = "Already applied" };
        //    }
        //    var updated = lastApply.ProposalJson != null;
        //    lastApply.ProposalJson = proposalJson;
        //    db.Entry(lastApply).CurrentValues.SetValues(lastApply);
        //    await db.SaveChangesAsync();
        //    ApplyLogger.WriteLine($"Updated application proposal: {email} / {jobId}");
        //    return new { success = true, updated };
        //}

        [Route(HttpVerbs.Put, "/apply/{email}/{jobId}/state")]
        public async Task<object> PutApplyState(string? email, string? jobId, [FormField] string? state)
        {
            if (email == null || jobId == null)
            {
                ApplyLogger.WriteLine($"Invalid Params: {email} / {jobId}");
                return new { success = false, error = "Invalid Params" };
            }
            if (string.IsNullOrWhiteSpace(state)) state = null;
            using var db = new UpworkContext();
            var lastApply = await db.Applications!.SingleOrDefaultAsync(x => x.Email == email && x.JobId == jobId);
            if (lastApply == null)
            {
                ApplyLogger.WriteLine($"Not Exist: {email} / {jobId}");
                return new { success = false, error = "Not Exist" };
            }
            lastApply.State = state;
            db.Entry(lastApply).CurrentValues.SetValues(lastApply);
            await db.SaveChangesAsync();
            ApplyLogger.WriteLine($"Updated application state -> {state}: {email} / {jobId}");
            return new { success = true };
        }

        [Route(HttpVerbs.Put, "/apply/{email}/{jobId}/success")]
        public async Task<object> PutApplySuccess(string? email, string? jobId, [FormField] string? jobTitle, [FormField] string? jobCountry)
        {
            if (email == null || jobId == null)
            {
                ApplyLogger.WriteLine($"Invalid Params: {email} / {jobId}");
                return new { success = false, error = "Invalid Params" };
            }
            using var db = new UpworkContext();
            var lastApply = await db.Applications!.SingleOrDefaultAsync(x => x.Email == email && x.JobId == jobId);
            if (lastApply == null)
            {
                ApplyLogger.WriteLine($"Not Exist: {email} / {jobId}");
                return new { success = false, error = "Not Exist" };
            }
            if (lastApply.State == Application.STATE_SUCCESS)
            {
                ApplyLogger.WriteLine($"Already applied: {email} / {jobId}");
                return new { success = false, error = "Already applied" };
            }
            lastApply.State = Application.STATE_SUCCESS;
            lastApply.SucceedDate = DateTime.UtcNow;
            if (jobTitle != null) lastApply.JobTitle = jobTitle;
            if (jobCountry != null) lastApply.JobCountry = jobCountry;
            db.Entry(lastApply).CurrentValues.SetValues(lastApply);
            await db.SaveChangesAsync();
            var account = await db.Accounts!.SingleOrDefaultAsync(x => x.Email == email);
            if (account == null)
            {
                ApplyLogger.WriteLine($"Account not found: {email} / {jobId}");
                return new { success = false, error = "Account not found" };
            }
            account.State = jobId;
            db.Entry(account).CurrentValues.SetValues(account);
            await db.SaveChangesAsync();
            ApplyLogger.WriteLine($"Updated application success: {email} / {jobId} / {jobTitle}");
            return new { success = true };
        }

        [Route(HttpVerbs.Delete, "/apply/{email}/{jobId}/")]
        public async Task<object> DeleteApplyByEmail(string? email, string? jobId, [FormField] string? message)
        {
            if (email == null || jobId == null)
            {
                ApplyLogger.WriteLine($"Invalid Params: {email} / {jobId} / {message}");
                return new { success = false, error = "Invalid Params" };
            }
            using var db = new UpworkContext();
            var lastApply = await db.Applications!.SingleOrDefaultAsync(x => x.Email == email && x.JobId == jobId);
            if (lastApply == null)
            {
                ApplyLogger.WriteLine($"Not Exist: {email} / {jobId} / {message}");
                return new { success = false, error = "Not Exist" };
            }
            if (lastApply.State == Application.STATE_SUCCESS)
            {
                ApplyLogger.WriteLine($"Already applied: {email} / {jobId} / {message}");
                return new { success = false, error = "Already applied" };
            }
            db.Applications!.Remove(lastApply);
            await db.SaveChangesAsync();
            ApplyLogger.WriteLine($"Deleted application: {email} / {jobId} / {message}");
            return new { success = true, jobId };
        }

        [Route(HttpVerbs.Post, "/apply/{email}/{jobId}/nextEmail")]
        public async Task<object> PostApplyNextEmail(string? email, string? jobId, [FormField] string? reason, [FormField] string? state)
        {
            if (email == null || jobId == null || reason == null)
            {
                ApplyLogger.WriteLine($"Invalid Params: {email} / {jobId}");
                return new { success = false, error = "Invalid Params" };
            }
            if (string.IsNullOrWhiteSpace(state)) state = null;
            using var db = new UpworkContext();
            var application = await db.Applications!.SingleOrDefaultAsync(x => x.Email == email && x.JobId == jobId);
            if (application == null)
            {
                ApplyLogger.WriteLine($"Old application not found: {email} / {jobId}");
                return new { success = false, error = "Old application not found" };
            }
            var oldAccount = await db.Accounts!.SingleOrDefaultAsync(x => x.Email == email);
            if (oldAccount == null)
            {
                ApplyLogger.WriteLine($"Old account not found: {email} / {jobId}");
                return new { success = false, error = "Old account not found" };
            }
            oldAccount.State = reason;
            db.Entry(oldAccount).CurrentValues.SetValues(oldAccount);
            await db.SaveChangesAsync();
            application.State = reason;
            db.Entry(application).CurrentValues.SetValues(application);
            await db.SaveChangesAsync();
            var profile = oldAccount.Profile;
            if (profile == null)
            {
                ApplyLogger.WriteLine($"Profile is null: {email} / {jobId}");
                return new { success = false, profile, error = "Profile is null" };
            }
            Account? nextAccount;
            while (true)
            {
                nextAccount = await db.Accounts!.Where(x => x.Profile == profile && x.State == null).OrderBy(x => x.CreatedDate).FirstOrDefaultAsync();
                if (nextAccount == null || nextAccount.CreatedDate != null && (DateTime.UtcNow - nextAccount.CreatedDate.Value).TotalHours < 24)
                {
                    ApplyLogger.WriteLine($"Email Overflow!: {jobId} / {profile}");
                    application.State = "$email-overflow";
                    db.Entry(application).CurrentValues.SetValues(application);
                    await db.SaveChangesAsync();
                    return new { success = false, profile, error = "Email Overflow!" };
                }
                var lastApplied = await db.Applications!.Where(x => x.Email == nextAccount.Email).OrderBy(x => x.CreatedDate).FirstOrDefaultAsync();
                if (lastApplied == null)
                    break;
                ApplyLogger.WriteLine($"next account already used: {nextAccount.Email}");
                nextAccount.State = lastApplied.JobId;
                db.Entry(nextAccount).CurrentValues.SetValues(nextAccount);
                await db.SaveChangesAsync();
            }
            db.Applications!.Remove(application);
            await db.SaveChangesAsync();
            application.Email = nextAccount.Email;
            application.State = state;
            await db.Applications!.AddAsync(application);
            await db.SaveChangesAsync();
            ApplyLogger.WriteLine($"NextEmail by {reason}: {jobId} / {email} -> {nextAccount.Email}");
            return new { success = true, email, newEmail = nextAccount.Email, jobId };
        }

        class AccountChannel
        {
            public int Channel { get; set; }
            public DateTime Time { get; set; }
        }

        static readonly Dictionary<string, AccountChannel> AccountChannelDictionary = new();

    }
}