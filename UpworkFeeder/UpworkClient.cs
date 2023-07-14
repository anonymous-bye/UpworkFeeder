using MailKit;
using MailKit.Net.Imap;
using MailKit.Security;
using MailKit.Net.Proxy;
using MimeKit;
using System.Net;
using Newtonsoft.Json.Linq;
using MailKit.Search;
using System.Text;

internal class UpworkClient
{
    public static string? login(string username, string password)
    {
        var cookies = new CookieContainer();
        var handler = new HttpClientHandler
        {
            Proxy = new WebProxy("socks5://45.159.248.204:3306"),
            CookieContainer = cookies
        };

        // Create HttpClient with the handler
        var client = new HttpClient(handler);
        client.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36");
        var loginGetResponse = client.GetAsync("https://www.upwork.com/login").Result;
        loginGetResponse.EnsureSuccessStatusCode(); // Ensure successful login

        // Save cookies from the response
        Uri uri = new Uri("https://www.upwork.com"); // Set the website's base URL
        cookies.GetCookies(uri);

        // Use the saved cookies in the next request
        string json = @"{
   ""login"" : {
      ""deviceType"" : ""desktop"",
      ""elapsedTime"" : 66504,
      ""forterToken"" : """",
      ""iovation"" : """",
      ""mode"" : ""username"",
      ""username"" : ""cv299@metagon.online""
   }
}
";
        var jsonContent = new StringContent(json, Encoding.UTF8, "application/json");

        HttpResponseMessage loginPostResponse = client.PostAsync("https://www.upwork.com/login", jsonContent).Result;
        string loginPostResonseText = loginPostResponse.Content.ReadAsStringAsync().Result;

        Console.WriteLine(loginPostResonseText);
        return loginPostResonseText;
    }

}
