
using IniParser;
using IniParser.Model;
using System.Text;

internal class Config
{
    public const string INI_FILENAME = "config.ini";

    public static string? ServerUrl { get; }
    public static string? EmailServerAddress { get; }
    public static int EmailServerPort { get; } = 143;
    public static bool UseProxy { get; }
    public static string? ProxyHost { get; }
    public static int ProxyPort { get; }
    public static string? ProxyUsername { get; }
    public static string? ProxyPassword { get; }

    static Config()
    {
        //using var client = new HttpClient();
        //client.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36");
        //var uri = new Uri("http://ip-api.com/json/");
        //var response = client.GetAsync(uri).Result;
        //var responseText = response.Content.ReadAsStringAsync().Result;
        //string? myIp = (string?)JObject.Parse(responseText)["query"];
        //if (myIp != null && !myIp.StartsWith("188.43.136.")) UseProxy = false;
        //Logger.WriteLine($"IP = {myIp}");

        if (!File.Exists(INI_FILENAME))
        {
            File.WriteAllText(INI_FILENAME, null, Encoding.UTF8);
        }
        else
        {
            var iniData = GetData();

            ServerUrl = iniData["Server"]["Url"] ?? "http://*:2084/";

            EmailServerAddress = iniData["EmailServer"]["Host"];
            EmailServerPort = iniData["EmailServer"]["Port"].ToInt() ?? EmailServerPort;

            UseProxy = iniData["Socks5Proxy"]["Enabled"] == "1";
            ProxyHost = iniData["Socks5Proxy"]["Host"];
            ProxyPort = iniData["Socks5Proxy"]["Port"].ToInt() ?? EmailServerPort;
            ProxyUsername = iniData["Socks5Proxy"]["Username"];
            ProxyPassword = iniData["Socks5Proxy"]["Password"];
            if (UseProxy)
                Logger.WriteLine($"UseProxy = {UseProxy}");
        }
    }

    public static IniData GetData()
    {
        var IniDataParser = new FileIniDataParser();
        return IniDataParser.ReadFile(INI_FILENAME);
    }

    public static void SaveData(IniData iniData)
    {
        var IniDataParser = new FileIniDataParser();
        IniDataParser.WriteFile(INI_FILENAME, iniData);
    }

}
