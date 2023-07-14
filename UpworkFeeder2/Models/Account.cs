using System.ComponentModel.DataAnnotations.Schema;

namespace Valloon.UpworkFeeder2.Models
{

    /**
    * @author Valloon Present
    * @version 2023-06-24
    */
    [Table("tbl_account")]
    public class Account
    {

        [System.ComponentModel.DataAnnotations.Key]
        [Column("email")]
        public string? Email { get; set; }

        [Column("password")]
        public string? Password { get; set; }

        [Column("profile")]
        public string? Profile { get; set; }

        [Column("profile_title")]
        public string? ProfileTitle { get; set; }

        [Column("state")]
        public string? State { get; set; }

        [Column("connects")]
        public int? Connects { get; set; }

        [Column("rising_talent")]
        public string? RisingTalent { get; set; }

        [Column("created_date")]
        public DateTime? CreatedDate { get; set; }

        [Column("last_login_date")]
        public DateTime? LastLoginDate { get; set; }

    }
}