using EmbedIO;
using EmbedIO.Utilities;
using EmbedIO.WebApi;
using System.Text;

namespace Valloon.UpworkFeeder2.Controllers
{

    /**
     * @author Valloon Present
     * @version 2023-06-13
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

        protected async Task SendResponseText(string text)
        {
            text = Validate.NotNull(nameof(text), text);
            HttpContext.Response.ContentType = MimeType.PlainText;
            await using var writer = HttpContext.OpenResponseText(new UTF8Encoding(false));
            await writer.WriteAsync(text).ConfigureAwait(false);
        }

        protected async Task SendResponseJson(object? jsonObject)
        {
            jsonObject = Validate.NotNull(nameof(jsonObject), jsonObject);
            HttpContext.Response.ContentType = MimeType.Json;
            await using var writer = HttpContext.OpenResponseText(new UTF8Encoding(false));
            await writer.WriteAsync(jsonObject.ToString()).ConfigureAwait(false);
        }

    }
}