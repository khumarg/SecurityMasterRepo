using Microsoft.AspNetCore.Mvc;

namespace SecurityMasterAPI.Models.BondRepo
{
    public interface IBond
    {
        public Task<IEnumerable<Bond>> GetBonds();
        public Task<Bond> GetBond(int id);
        public Task<Bond> GetBond(string sname);
        public Task PutBond(int id, Bond bond);
        public Task<Bond> PostBond(Bond bond);
        public Task DeleteBond(int id);
        public bool BondExists(int id);
    }
}
