using SecurityMasterAPI.Models;

namespace SecurityMasterAPI.Controllers
{
    public class AuditController
    {
        private readonly SecurityMaster3685Context _context;

        public AuditController(SecurityMaster3685Context context)
        {
            _context = context;
        }

        public void LogAudit(string TableName, string ActionType, string OldValue,  string NewValue)
        {
            var audit = new AuditSRM
            {
                TableName = TableName,
                ActionType = ActionType,
                OldValue = OldValue,
                NewValue = NewValue
            };

            _context.AuditSRM.Add(audit);
            _context.SaveChanges();
        }
    }
}
