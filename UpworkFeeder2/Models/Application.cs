using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace Valloon.UpworkFeeder2.Models
{

    /**
    * @author Valloon Present
    * @version 2023-06-24
    */
    [Table("tbl_application")]
    [PrimaryKey(nameof(Email), nameof(JobId))]
    public class Application
    {
        public const string STATE_SUCCESS = "success";

        [Column("email")]
        public string? Email { get; set; }

        [Column("job_id")]
        public string? JobId { get; set; }

        [Column("password")]
        public string? Password { get; set; }

        [Column("profile")]
        public string? Profile { get; set; }

        [Column("proposal_json", TypeName = "json")]
        public string? ProposalJson { get; set; }

        [Column("job_title")]
        public string? JobTitle { get; set; }

        [Column("job_country")]
        public string? JobCountry { get; set; }

        [Column("priority")]
        public int? Priority { get; set; }

        [Column("channel")]
        public int? Channel { get; set; }

        [Column("state")]
        public string? State { get; set; }

        [Column("created_date")]
        public DateTime? CreatedDate { get; set; }

        [Column("updated_date")]
        public DateTime? UpdatedDate { get; set; }

        [Column("succeed_date")]
        public DateTime? SucceedDate { get; set; }

    }
}