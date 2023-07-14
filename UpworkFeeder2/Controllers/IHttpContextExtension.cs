using EmbedIO;
using EmbedIO.Utilities;
using System.Text;

namespace Valloon.UpworkFeeder2.Controllers
{

    /**
     * @author Valloon Present
     * @version 2023-06-28
     */
    public static class IHttpContextExtension
    {

        public static async Task SendStringAsync(this IHttpContext @this, string content, string contentType = MimeType.PlainText, Encoding? encoding = null)
        {
            content = Validate.NotNull(nameof(content), content);
            encoding ??= new UTF8Encoding(false);
            if (contentType != null)
            {
                @this.Response.ContentType = contentType;
                @this.Response.ContentEncoding = encoding;
            }
            using var text = @this.OpenResponseText(encoding);
            await text.WriteAsync(content).ConfigureAwait(false);
        }

        public static async Task SendJsonAsync(this IHttpContext @this, object jsonObject, string contentType = MimeType.Json, Encoding? encoding = null)
        {
            jsonObject = Validate.NotNull(nameof(jsonObject), jsonObject);
            encoding ??= new UTF8Encoding(false);
            if (contentType != null)
            {
                @this.Response.ContentType = contentType;
                @this.Response.ContentEncoding = encoding;
            }
            using var text = @this.OpenResponseText(encoding);
            await text.WriteAsync(jsonObject.ToString()).ConfigureAwait(false);
        }

    }
}