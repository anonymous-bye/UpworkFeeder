using MailKit;
using MailKit.Net.Imap;
using MailKit.Security;
using MailKit.Net.Proxy;
using MimeKit;
using System.Net;
using Newtonsoft.Json.Linq;
using MailKit.Search;

internal class EmailReader
{
    public static string? GetVerifyUrl(string username, string password, string receiver)
    {
        Socks4aClient? proxyClient = null;
        if (Config.UseProxy)
        {
            if (string.IsNullOrWhiteSpace(Config.ProxyUsername))
            {
                proxyClient = new(Config.ProxyHost, Config.ProxyPort);
            }
            else
            {
                NetworkCredential credential = new(Config.ProxyUsername, Config.ProxyPassword);
                proxyClient = new(Config.ProxyHost, Config.ProxyPort, credential);
            }
        }
        using var client = new ImapClient();
        client.AuthenticationMechanisms.Remove("XOAUTH2");
        //client.ServerCertificateValidationCallback = (s, c, h, e) => true;
        client.ProxyClient = proxyClient;
        client.Connect(Config.EmailServerAddress, Config.EmailServerPort, SecureSocketOptions.None); // Connect using SSL/TLS
        client.Authenticate(username, password);

        client.Inbox.Open(FolderAccess.ReadOnly);

        var query = SearchQuery.ToContains(receiver).And(SearchQuery.SubjectContains("Verify your email address"));
        var results = client.Inbox.Search(query);
        string? resultUrl = null;

        if (results.Count > 0)
        {
            var message = client.Inbox.GetMessage(results[0]);
            var body = message.HtmlBody;
            var startIndex = body.IndexOf("href=\"https://www.upwork.com/nx/signup/verify-email/token/") + 6;
            var endIndex = body.IndexOf("\"", startIndex);
            resultUrl = body[startIndex..endIndex];
        }

        client.Disconnect(true);
        return resultUrl;
    }

}
