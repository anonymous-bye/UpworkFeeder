/**
 * @author Valloon Project
 * @version 2020-03-03
 */
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

    public static bool ContainsIgnoreCase(this string source, string toCheck)
    {
        return source?.IndexOf(toCheck, StringComparison.OrdinalIgnoreCase) >= 0;
    }

}
