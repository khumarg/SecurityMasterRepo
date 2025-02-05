using Microsoft.AspNetCore.Mvc;

namespace SecurityMasterAPI.Models.EquityRepo
{
    public interface IEquity
    {
        public Task<IEnumerable<Equity>> GetEquities();
        //public Task<Equity> GetEquity(int id);
        //public Task PutEquity(int id, Equity equity);
        //public Task<Equity> PostEquity(Equity equity);
        //public Task DeleteEquity(int id);

    }
}
