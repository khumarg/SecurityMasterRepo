using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SecurityMasterAPI.Models;
using SecurityMasterAPI.Models.BondRepo;

namespace SecurityMasterAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BondsController : ControllerBase
    {
        IBond _context;
        //private readonly SecurityMaster3685Context _context;

        public BondsController(IBond context)
        {
            _context = context;
        }

        //public BondsController(SecurityMaster3685Context context)
        //{
        //    _context = context;
        //}

        // GET: api/Bonds
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bond>>> GetBonds()
        {
            //return await _context.Bonds.ToListAsync();

            var bonds = await _context.GetBonds();

            if(bonds == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(bonds);
            }
        }

        // GET: api/Bonds/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Bond>> GetBond(int id)
        {
            //var bond = await _context.Bonds.FindAsync(id);

            var bond = await _context.GetBond(id);

            if (bond == null)
            {
                return NotFound();
            }

            return Ok(bond);
        }

        // GET: api/Bonds/MENTOR 12 1/2 02/15/18
        [HttpGet("{sname}")]
        public async Task<ActionResult<Bond>> GetBond(string sname)
        {
            //var bond = await _context.Bonds.FirstOrDefaultAsync(x => x.SecurityName.Contains(sname));
            //var bond = _context.Bonds.Where(x => EF.Functions.Like(x.SecurityName, $"%{sname}%"));

            var bond = await _context.GetBond(sname);

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

            //_context.Entry(bond).State = EntityState.Modified;

            try
            {
                //await _context.SaveChangesAsync();
                await _context.PutBond(id, bond);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.BondExists(id))
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
            //_context.Bonds.Add(bond);
            try
            {
                //await _context.SaveChangesAsync();

                await _context.PostBond(bond);
            }
            catch (DbUpdateException)
            {
                if (_context.BondExists(bond.SecurityId))
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
            //var bond = await _context.Bonds.FindAsync(id);
            if (_context.BondExists(id) == false)
            {
                return NotFound();
            }

            await _context.DeleteBond(id);

            //_context.Bonds.Remove(bond);
            //await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
