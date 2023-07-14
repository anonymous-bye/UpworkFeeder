using System.ComponentModel.DataAnnotations.Schema;

namespace Valloon.UpworkFeeder2.Models
{

    /**
    * @author Valloon Present
    * @version 2023-06-24
    */
    [Table("tbl_message")]
    public class Message
    {

        [System.ComponentModel.DataAnnotations.Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("email")]
        public string? Email { get; set; }

        [Column("job_id")]
        public string? JobId { get; set; }

        [Column("job_title")]
        public string? JobTitle { get; set; }

        [Column("client_name")]
        public string? ClientName { get; set; }

        [Column("message_content")]
        public string? MessageContent { get; set; }

        [Column("message_link")]
        public string? MessageLink { get; set; }

        [Column("received_date")]
        public DateTime? ReceivedDate { get; set; }

    }
}