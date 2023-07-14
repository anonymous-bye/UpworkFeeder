// See https://aka.ms/new-console-template for more information

using EmbedIO;
using EmbedIO.Files;
using EmbedIO.WebApi;
using Swan.Logging;
using System.Diagnostics;
using System.Reflection;

//Console.BufferHeight = Int16.MaxValue - 1;
//AppHelper.MoveWindow(AppHelper.GetConsoleWindow(), 24, 0, 1080, 280, true);
AppHelper.FixCulture();

//System.Net.ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };

if (Debugger.IsAttached)
{
    ConsoleLogger.Instance.LogLevel = LogLevel.Info;
}
else
{
    AppHelper.QuickEditMode(false);
    //Swan.Logging.Logger.UnregisterLogger<ConsoleLogger>();
    ConsoleLogger.Instance.LogLevel = LogLevel.Info;
}

//var x = EmailReader.GetVerifyUrl("admin@metagon.online", "qweQWE123!@#`", "cv730@metagon.online");
//UpworkClient.login("cv299@metagon.online", "qweQWE123!@#`");

using var server = CreateWebServer(Config.ServerUrl!);
var task = server.RunAsync();
Console.WriteLine($"Listening on {Config.ServerUrl}");

Console.ReadKey(true);

/**
 * https://github.com/unosquare/embedio
 */
static WebServer CreateWebServer(string url)
{
    var server = new WebServer(options => options
            .WithUrlPrefix(url)
            .WithMode(HttpListenerMode.EmbedIO))
        .WithStaticFolder("/html", "www/html", false, m => m.WithContentCaching(false))
        .WithStaticFolder("/vendor", "www/vendor", true, m => m.WithContentCaching(true))
        .WithStaticFolder("/report", "www/report", false, m => m.WithContentCaching(false))
        //.WithModule(new FileModule("/report", new FileSystemProvider("report", false)))
        .WithWebApi("/api", m => m.WithController<ApiController>())
        .WithWebApi("/", m => m.WithController<RootController>());
    server.StateChanged += (s, e) => $"WebServer New State - {e.NewState}".Info();
    return server!;
}
