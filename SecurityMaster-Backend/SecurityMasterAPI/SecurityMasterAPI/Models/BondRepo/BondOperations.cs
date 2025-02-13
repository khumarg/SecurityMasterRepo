
using Microsoft.EntityFrameworkCore;

namespace SecurityMasterAPI.Models.BondRepo
{
    public class BondOperations : IBond
    {
        SecurityMaster3685Context _context;

        public BondOperations(SecurityMaster3685Context context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Bond>> GetBonds()
        {
            return await _context.Bonds.ToListAsync();
        }

        public async Task<Bond> GetBond(int id)
        {
            var bond = await _context.Bonds.FindAsync(id);

            if (bond == null)
            {
                return null;
            }

            return bond;
        }

        public async Task<Bond> GetBond(string sname)
        {
            var bond = await _context.Bonds.FirstOrDefaultAsync(x => x.SecurityName.Contains(sname));
            //var bond = _context.Bonds.Where(x => EF.Functions.Like(x.SecurityName, $"%{sname}%"));

            if (bond == null)
            {
                return null;
            }

            return bond;
        }

        public async Task<Bond> PostBond(Bond bond)
        {
            _context.Bonds.Add(bond);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (BondExists(bond.SecurityId))
                {
                    return bond;
                }
                else
                {
                    throw;
                }
            }

            return bond;
        }

        public async Task PutBond(int id, Bond bond)
        {
            if (id != bond.SecurityId)
            {
                return;
            }

            _context.Entry(bond).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BondExists(id))
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

        public async Task DeleteBond(int id)
        {
            var bond = await _context.Bonds.FindAsync(id);
            if (bond == null)
            {
                return;
            }

            _context.Bonds.Remove(bond);
            await _context.SaveChangesAsync();

            return;
        }

        public bool BondExists(int id)
        {
            return _context.Bonds.Any(e => e.SecurityId == id);
        }
    }
}
