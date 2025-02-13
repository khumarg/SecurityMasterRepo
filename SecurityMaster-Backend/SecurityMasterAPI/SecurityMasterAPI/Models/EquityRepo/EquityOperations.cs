using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SecurityMasterAPI.Controllers;

namespace SecurityMasterAPI.Models.EquityRepo
{
    public class EquityOperations : IEquity
    {
        SecurityMaster3685Context _context;

        public EquityOperations(SecurityMaster3685Context context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Equity>> GetEquities()
        {
            var equities = await _context.Equities.ToListAsync();

            return equities;
        }

        public async Task<Equity> GetEquity(int id)
        {
            var equity = await _context.Equities.FindAsync(id);

            if (equity == null)
            {
                return null;
            }

            return equity;
        }

        public async Task<Equity> GetEquity(string sname)
        {
            var equity = await _context.Equities.FirstOrDefaultAsync(x => x.SecurityName.Contains(sname));

            if (equity == null)
            {
                return null;
            }

            return equity;
        }

        public async Task<Equity> PostEquity(Equity equity)
        {
            _context.Equities.Add(equity);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EquityExists(equity.SecurityId))
                {
                    return equity;
                }
                else
                {
                    throw;
                }
            }

            return equity;
        }

        public async Task PutEquity(int id, Equity equity)
        {
            if (id != equity.SecurityId)
            {
                return;
            }

            _context.Entry(equity).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EquityExists(id))
                {
                    throw;
                }
                else
                {
                    throw;
                }
            }

            return;
        }

        public async Task DeleteEquity(int id)
        {
            var equity = await _context.Equities.FindAsync(id);
            if (equity == null)
            {
                return;
            }

            _context.Equities.Remove(equity);
            await _context.SaveChangesAsync();

            return;
        }

        public bool EquityExists(int id)
        {
            return _context.Equities.Any(e => e.SecurityId == id);
        }
    }
}
