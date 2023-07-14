using System.ComponentModel.DataAnnotations.Schema;

namespace Valloon.UpworkFeeder2.Models
{

    /**
    * @author Valloon Present
    * @version 2023-06-29
    */
    [Table("tbl_profile")]
    public class Profile
    {

        [System.ComponentModel.DataAnnotations.Key]
        [Column("id")]
        public string? Id { get; set; }

        [Column("symbol")]
        public string? Symbol { get; set; }

        [Column("title")]
        public string? Title { get; set; }

        [Column("channel")]
        public int? Channel { get; set; }

        [Column("require_count")]
        public int? RequireCount { get; set; }

        [Column("state")]
        public string? State { get; set; }

    }
}