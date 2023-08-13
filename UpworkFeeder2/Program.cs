// See https://aka.ms/new-console-template for more information

/**
 * @author Valloon Present
 * @version 2023-06-23
 */

using EmbedIO;
using EmbedIO.Files;
using EmbedIO.WebApi;
using Swan.Logging;
using System.Diagnostics;
using System.Reflection;
using Valloon.UpworkFeeder2.Controllers;

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

System.Runtime.CompilerServices.RuntimeHelpers.RunClassConstructor(typeof(Config).TypeHandle);
using var server = CreateWebServer(Config.HttpListenUrl!);
var task = server.RunAsync();
Console.WriteLine($"Listening on {Config.HttpListenUrl}");
Console.ReadKey(true);

/**
 * https://github.com/unosquare/embedio
 */
static WebServer CreateWebServer(string url)
{
    var server = new WebServer(options => options
        .WithUrlPrefix(url)
        .WithMode(HttpListenerMode.EmbedIO))
        .WithCors()
        .WithStaticFolder("/html", "www/html", false, m => m.WithContentCaching(false))
        .WithStaticFolder("/vendor", "www/vendor", true, m => m.WithContentCaching(true))
        .WithStaticFolder("/script", "www/script", false, m => m.WithContentCaching(false))
        //.WithModule(new FileModule("/report", new FileSystemProvider("report", false)))
        .WithWebApi("/api/v2", m => m.WithController<ApiV2Controller>())
        .WithWebApi("/", m => m.WithController<RootController>());
    server.StateChanged += (s, e) => $"WebServer New State - {e.NewState}".Info();
    return server!;
}
