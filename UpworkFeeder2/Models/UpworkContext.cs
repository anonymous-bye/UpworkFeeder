using Microsoft.EntityFrameworkCore;
using System.Data.Common;
using System.Data;
using System.Globalization;
using System.Runtime.InteropServices;
using System.Runtime.Serialization;

namespace Valloon.UpworkFeeder2.Models
{

    /**
     * @author Valloon Present
     * @version 2023-06-24
     */
    public class UpworkContext : DbContext
    {
        public DbSet<Profile>? Profiles { get; set; }
        public DbSet<Account>? Accounts { get; set; }
        public DbSet<Application>? Applications { get; set; }
        public DbSet<Message>? Messages { get; set; }

        static UpworkContext()
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }

        public UpworkContext()
        {
            Set<Profile>().AsNoTracking();
            Set<Account>().AsNoTracking();
            Set<Application>().AsNoTracking();
            Set<Message>().AsNoTracking();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(connectionString:
               $"Server={Config.PostgresHost};Port={Config.PostgresPort};User Id={Config.PostgresUser};Password={Config.PostgresPassword};Database={Config.PostgresDatabase};");
            base.OnConfiguring(optionsBuilder);
        }

        public async Task<List<T>> RawSqlQueryAsync<T>(string query, Func<DbDataReader, T> map)
        {
            using var command = Database.GetDbConnection().CreateCommand();
            command.CommandText = query;
            command.CommandType = CommandType.Text;
            await Database.OpenConnectionAsync();
            using var result = await command.ExecuteReaderAsync();
            var entities = new List<T>();
            while (await result.ReadAsync())
            {
                entities.Add(map(result));
            }
            return entities;
        }

        public static T? GetValue<T>(object obj)
        {
            if (obj == null || obj == DBNull.Value)
                return default; // returns the default value for the type
            return (T)Convert.ChangeType(obj, typeof(T));
        }

    }
}