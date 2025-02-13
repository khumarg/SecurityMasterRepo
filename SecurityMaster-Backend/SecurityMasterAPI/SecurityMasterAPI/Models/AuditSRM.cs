using System.ComponentModel.DataAnnotations;

namespace SecurityMasterAPI.Models
{
    public class AuditSRM
    {
        [Key]
        public int AuditID { get; set; }
        public string TableName { get; set; }
        public string TimeStamp { get; set; }
        public string OldValue { get; set; }
        public string NewValue { get; set; }
        public string ActionType { get; set; }
    }
}
