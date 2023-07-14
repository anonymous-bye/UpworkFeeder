using EmbedIO;
using EmbedIO.Routing;

namespace Valloon.UpworkFeeder2.Controllers
{

    /**
     * @author Valloon Present
     * @version 2023-06-13
     * https://github.com/unosquare/embedio
     * https://github.com/unosquare/embedio/wiki/Cookbook
     */
    internal class RootController : BaseController
    {

        [Route(HttpVerbs.Get, "/")]
        public void GetRoot()
        {
            if (HttpContext.Request.IsSecureConnection) return;
            var requestUrl = HttpContext.Request.Url.ToString();
            HttpContext.Redirect(requestUrl.Replace("http://", "https://"));
        }

        [Route(HttpVerbs.Get, "/favicon.ico")]
        public void GetFavicon()
        {
            HttpContext.Redirect($"/html/favicon0.ico");
            //using var stream = HttpContext.OpenResponseStream();
            //stream.Write(File.ReadAllBytes("www/html/favicon.ico"));
        }

    }
}