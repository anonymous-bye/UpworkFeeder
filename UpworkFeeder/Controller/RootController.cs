using EmbedIO;
using EmbedIO.Routing;

/**
 * https://github.com/unosquare/embedio
 * https://github.com/unosquare/embedio/wiki/Cookbook
 */
internal class RootController : BaseController
{

    [Route(HttpVerbs.Get, "/favicon.ico")]
    public void GetFavicon()
    {
        HttpContext.Redirect($"/html/favicon.ico");
        //using var stream = HttpContext.OpenResponseStream();
        //stream.Write(File.ReadAllBytes("www/html/favicon.ico"));
    }

    [Route(HttpVerbs.Get, "/config")]
    public void GetConfig()
    {
        SendResponseText(File.ReadAllText(Config.INI_FILENAME));
    }

}
