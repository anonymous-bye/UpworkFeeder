using MailKit;
using MailKit.Net.Imap;
using MailKit.Security;
using MailKit.Search;
using Valloon.UpworkFeeder2.Models;
using HtmlAgilityPack;
using Fizzler.Systems.HtmlAgilityPack;
using System.Globalization;

/**
 * @author Valloon Present
 * @version 2023-06-12
 */
internal class EmailReader
{
    public static string? GetEmailVerifyUrl(string username, string password, string receiver)
    {
        var prefix = receiver.Split('@').Last().ToUpper();
        var emailServerHost = DotNetEnv.Env.GetString($"{prefix}_HOST", "127.0.0.1");
        var emailServerPort = DotNetEnv.Env.GetInt($"{prefix}_PORT", 143);
        return GetEmailVerifyUrl(emailServerHost, emailServerPort, username, password, receiver);
    }

    public static string? GetEmailVerifyUrl(string host, int port, string username, string password, string receiver)
    {
        //Socks4aClient? proxyClient = null;
        //if (Config.UseProxy)
        //{
        //    if (string.IsNullOrWhiteSpace(Config.ProxyUsername))
        //    {
        //        proxyClient = new(Config.ProxyHost, Config.ProxyPort);
        //    }
        //    else
        //    {
        //        NetworkCredential credential = new(Config.ProxyUsername, Config.ProxyPassword);
        //        proxyClient = new(Config.ProxyHost, Config.ProxyPort, credential);
        //    }
        //}
        using var client = new ImapClient();
        client.AuthenticationMechanisms.Remove("XOAUTH2");
        //client.ServerCertificateValidationCallback = (s, c, h, e) => true;
        //client.ProxyClient = proxyClient;
        client.Connect(host, port, SecureSocketOptions.None); // Connect using SSL/TLS
        client.Authenticate(username, password);
        client.Inbox.Open(FolderAccess.ReadOnly);

        var query = SearchQuery.ToContains(receiver).And(SearchQuery.FromContains("donotreply@upwork.com")).And(SearchQuery.SubjectContains("Verify your email address"));
        var results = client.Inbox.Search(query);
        string? resultUrl = null;

        if (results.Count > 0)
        {
            var message = client.Inbox.GetMessage(results[0]);
            var body = message.HtmlBody;
            var startIndex = body.IndexOf("href=\"https://www.upwork.com/nx/signup/verify-email/token/");
            if (startIndex > -1)
            {
                startIndex += 6;
                var endIndex = body.IndexOf("\"", startIndex);
                resultUrl = body[startIndex..endIndex];
            }
        }
        //else
        //{
        //    var folders = client.Inbox.GetSubfolders();
        //    results = client.Inbox.GetSubfolder("donotreply@upwork.com").Search(query);
        //    if (results.Count > 0)
        //    {
        //        var message = client.Inbox.GetMessage(results[0]);
        //        var body = message.HtmlBody;
        //        var startIndex = body.IndexOf("href=\"https://www.upwork.com/nx/signup/verify-email/token/");
        //        if (startIndex > -1)
        //        {
        //            startIndex += 6;
        //            var endIndex = body.IndexOf("\"", startIndex);
        //            resultUrl = body[startIndex..endIndex];
        //        }
        //    }
        //}

        client.Disconnect(true);
        return resultUrl;
    }

    public static List<Message> GetMessages(string host, int port, string username, string password, string? receiver, out int failedCount)
    {
        using var client = new ImapClient();
        client.AuthenticationMechanisms.Remove("XOAUTH2");
        //client.ServerCertificateValidationCallback = (s, c, h, e) => true;
        client.Connect(host, port, SecureSocketOptions.None); // Connect using SSL/TLS
        client.Authenticate(username, password);
        client.Inbox.Open(FolderAccess.ReadOnly);

        var query = SearchQuery.FromContains("@upwork.com").And(SearchQuery.SubjectContains("You have unread messages about the job"));
        if (receiver != null)
            query = query.And(SearchQuery.ToContains(receiver));
        var results = client.Inbox.Search(query);
        var resultsCount = results.Count;
        List<Message> resultMessageList = new();
        failedCount = 0;
        for (int i = 0; i < resultsCount; i++)
        {
            var el = results[i];
            Logger.WriteLine($"Parsing email [{i + 1} / {resultsCount}]  {el.Id}");
            try
            {
                var message = client.Inbox.GetMessage(el);
                var htmlBody = message.HtmlBody;

                //var startIndex = htmlBody.IndexOf("href=\"https://www.upwork.com/ab/messages/") + 6;
                //var endIndex = htmlBody.IndexOf("\"", startIndex);
                //var messageLink = htmlBody[startIndex..endIndex];
                //var startIndex2 = htmlBody.IndexOf(">", endIndex) + 1;
                //var endIndex2 = htmlBody.IndexOf("<", startIndex2);
                //var jobTitle = htmlBody[startIndex2..endIndex2];

                var doc = new HtmlDocument();
                doc.LoadHtml(htmlBody);
                var tbody = doc.DocumentNode.QuerySelector("table>tbody>tr>td>div>table:nth-child(1)>tbody>tr>td>table>tbody>tr>td>table>tbody>tr>td>table>tbody");
                var a = tbody.QuerySelector("tr:nth-child(2)>td>a");
                var jobTitle = HtmlEntity.DeEntitize(a.InnerText).Trim();
                var messageLink = a.Attributes["href"].DeEntitizeValue;
                var clientName = HtmlEntity.DeEntitize(tbody.QuerySelector("tr:nth-child(3)>td>table:nth-child(1)>tr>td>table>tr>td:nth-child(2)>:nth-child(1)")?.InnerText).Trim();
                var receivedDateString = HtmlEntity.DeEntitize(tbody.QuerySelector("tr:nth-child(3)>td>table:nth-child(1)>tr>td>table>tr>td:nth-child(2)>:nth-child(2)")?.InnerText).Trim();

                DateTime? receivedDate = null;
                string[] formats = { "h:mm tt UTC, d MMM yyyy", "h:mm tt JST, d MMM yyyy", "h:mm tt ART, d MMM yyyy", "h:mm tt COT, d MMM yyyy" };
                foreach (var format in formats)
                {
                    if (DateTime.TryParseExact(receivedDateString, format, CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime parsedDateTime))
                    {
                        receivedDate = parsedDateTime;
                        break;
                    }
                }
                if (receivedDate == null)
                    Logger.WriteLine($"Failed to parse email datetime: {receivedDateString}", ConsoleColor.Red);

                var messageContent = HtmlEntity.DeEntitize(tbody.QuerySelector("tr:nth-child(3)>td>:nth-child(2)").InnerHtml).Trim();
                resultMessageList.Add(new Message
                {
                    Email = message.To[0].ToString(),
                    JobTitle = jobTitle,
                    ClientName = clientName,
                    MessageContent = messageContent,
                    MessageLink = messageLink,
                    ReceivedDate = receivedDate,
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                failedCount++;
            }
        }

        client.Disconnect(true);
        return resultMessageList;
    }

}
