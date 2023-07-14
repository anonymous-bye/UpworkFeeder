using EmbedIO;
using EmbedIO.WebApi;

/**
 * https://github.com/unosquare/embedio
 * https://github.com/unosquare/embedio/wiki/Cookbook
 */
internal abstract class BaseController : WebApiController
{

    protected void AllowCORS()
    {
        HttpContext.Response.Headers.Add("Access-Control-Allow-Origin", "*");
        HttpContext.Response.Headers.Add("Access-Control-Allow-Methods", "*");
    }

    protected void SendResponseText(string? text)
    {
        if (text == null) return;
        HttpContext.Response.ContentType = "text/plain";
        using var writer = HttpContext.OpenResponseText();
        writer.WriteAsync(text).Wait();
    }

    protected void SendResponseJson(object? text)
    {
        if (text == null) return;
        HttpContext.Response.ContentType = "application/json";
        using var writer = HttpContext.OpenResponseText();
        writer.WriteAsync(text.ToString()).Wait();
    }

}
