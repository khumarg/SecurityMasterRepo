using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SecurityMasterAPI.Models;
using SecurityMasterAPI.Models.EquityRepo;

namespace SecurityMasterAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EquitiesController : ControllerBase
    {
        //IEquity _context;
        private readonly SecurityMaster3685Context _context;

        //public EquitiesController(IEquity context)
        //{
        //    _context = context;
        //}

        public EquitiesController(SecurityMaster3685Context context)
        {
            _context = context;
        }

        // GET: api/Equities
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Equity>>> GetEquities()
        {
            return await _context.Equities.ToListAsync();

            //var info = await _context.GetEquities();

            //if (info == null)
            //{
            //    return NotFound();
            //}
            //else
            //{
            //    return Ok(info);
            //}
        }

        // GET: api/Equities/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Equity>> GetEquity(int id)
        {
            var equity = await _context.Equities.FindAsync(id);

            if (equity == null)
            {
                return NotFound();
            }

            return equity;
        }

        // GET: api/Equities/IBM US
        [HttpGet("{sname}")]
        public async Task<ActionResult<Equity>> GetEquity(string sname)
        {
            var equity = await _context.Equities.FirstOrDefaultAsync(x => x.SecurityName == sname);

            if (equity == null)
            {
                return NotFound();
            }

            return equity;
        }

        // PUT: api/Equities/Edit/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("Edit/{id:int}")]
        public async Task<IActionResult> PutEquity(int id, Equity equity)
        {
            if (id != equity.SecurityId)
            {
                return BadRequest();
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
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Equities/Add
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("Add")]
        public async Task<ActionResult<Equity>> PostEquity(Equity equity)
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
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetEquity", new { id = equity.SecurityId }, equity);
        }

        // DELETE: api/Equities/Delete/5
        [HttpDelete("Delete/{id:int}")]
        public async Task<IActionResult> DeleteEquity(int id)
        {
            var equity = await _context.Equities.FindAsync(id);
            if (equity == null)
            {
                return NotFound();
            }

            _context.Equities.Remove(equity);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EquityExists(int id)
        {
            return _context.Equities.Any(e => e.SecurityId == id);
        }
    }
}
