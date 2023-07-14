public static class StringExtensions
{

    public static int? ToInt(this string source, int? defaultValue = null)
    {
        try
        {
            return int.Parse(source);
        }
        catch { }
        return defaultValue;
    }

}
