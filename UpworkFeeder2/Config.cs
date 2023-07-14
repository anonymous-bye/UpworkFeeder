/**
 * @author Valloon Present
 * @version 2023-06-23
 */
internal class Config
{
    public const string ENV_FILENAME = "config.env";

    public static string HttpListenUrl { get; }
    public static string PostgresHost { get; }
    public static int PostgresPort { get; }
    public static string PostgresUser { get; }
    public static string PostgresPassword { get; }
    public static string PostgresDatabase { get; }


    static Config()
    {
        DotNetEnv.Env.Load(ENV_FILENAME);
        HttpListenUrl = DotNetEnv.Env.GetString("HTTP_LISTEN", "http://*:80/");
        PostgresHost = DotNetEnv.Env.GetString("POSTGRES_HOST", "localhost");
        PostgresPort = DotNetEnv.Env.GetInt("POSTGRES_PORT", 5432);
        PostgresUser = DotNetEnv.Env.GetString("POSTGRES_USER", "postgres");
        PostgresPassword = DotNetEnv.Env.GetString("POSTGRES_PASSWORD", "postgres");
        PostgresDatabase = DotNetEnv.Env.GetString("POSTGRES_DATABASE", "upwork");
    }

}
