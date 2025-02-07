using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SecurityMasterAPI.Models;

namespace SecurityMasterAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BondsController : ControllerBase
    {
        private readonly SecurityMaster3685Context _context;

        public BondsController(SecurityMaster3685Context context)
        {
            _context = context;
        }

        // GET: api/Bonds
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bond>>> GetBonds()
        {
            return await _context.Bonds.ToListAsync();
        }

        // GET: api/Bonds/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Bond>> GetBond(int id)
        {
            var bond = await _context.Bonds.FindAsync(id);

            if (bond == null)
            {
                return NotFound();
            }

            return bond;
        }

        // GET: api/Bonds/MENTOR 12 1/2 02/15/18
        [HttpGet("{sname}")]
        public async Task<ActionResult<Bond>> GetBond(string sname)
        {
            var bond = await _context.Bonds.FirstOrDefaultAsync(x => x.SecurityName == sname);

            if (bond == null)
            {
                return NotFound();
            }

            return bond;
        }

        // PUT: api/Bonds/Edit/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("Edit/{id:int}")]
        public async Task<IActionResult> PutBond(int id, Bond bond)
        {
            if (id != bond.SecurityId)
            {
                return BadRequest();
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
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Bonds/Add
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("Add")]
        public async Task<ActionResult<Bond>> PostBond(Bond bond)
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
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetBond", new { id = bond.SecurityId }, bond);
        }

        // DELETE: api/Bonds/Delete/5
        [HttpDelete("Delete/{id:int}")]
        public async Task<IActionResult> DeleteBond(int id)
        {
            var bond = await _context.Bonds.FindAsync(id);
            if (bond == null)
            {
                return NotFound();
            }

            _context.Bonds.Remove(bond);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BondExists(int id)
        {
            return _context.Bonds.Any(e => e.SecurityId == id);
        }
    }
}
