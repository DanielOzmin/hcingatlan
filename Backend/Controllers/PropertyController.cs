using Backend.Data;
using Backend.DTOs;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PropertyController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public PropertyController(ApplicationDbContext context)
    {
        _context = context;
    }

    // get all, get by id, get by search
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Property>>> GetProperties()
    {
        var properties = await _context.Properties.ToListAsync();
        if (properties == null) return NotFound();
        return properties;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Property>> GetPropertyById(Guid id)
    {
        var property = await _context.Properties.FindAsync(id);
        if (property == null) return NotFound();
        return property;
    }

    [HttpPost("search")]
    public async Task<ActionResult<IEnumerable<Property>>> GetPropertiesBySearch([FromBody] PropertySearchDto search)
    {
        var query = _context.Properties.AsQueryable();

        if (!string.IsNullOrEmpty(search.SelectedCategory))
            query = query.Where(p => p.TransactionType == search.SelectedCategory);

        if (search.SelectedType.Count > 0)
            query = query.Where(p => search.SelectedType.Contains(p.PropertyType));

        if (search.Location.Count > 0)
        {
            var districts = new List<string>();
            var cities = new List<string>();

            foreach (var loc in search.Location)
            {
                if (loc.Contains("District") && loc.Contains("–"))
                {
                    var roman = loc.Split('–')[1].Trim();
                    districts.Add($"District {roman}");
                }
                else
                {
                    cities.Add(loc);
                }
            }

            query = query.Where(p =>
                (districts.Count == 0 || districts.Contains(p.District)) ||
                (cities.Count == 0 || cities.Contains(p.City)));
        }

        if (!string.IsNullOrEmpty(search.TypedId))
            query = query.Where(p => p.PropertyId == search.TypedId);

        var multiplier = search.SelectedCategory == "Rent" ? 1000 : 1000000;

        if (search.MinPrice.HasValue) 
            query = query.Where(p => p.Price >= search.MinPrice.Value * multiplier);
        
        if (search.MaxPrice.HasValue)
            query = query.Where(p => p.Price <= search.MaxPrice.Value * multiplier);
        
        if (search.MinFloorArea.HasValue)
                query = query.Where(p => p.FloorArea >= search.MinFloorArea.Value);

        if (search.MaxFloorArea.HasValue)
            query = query.Where(p => p.FloorArea <= search.MaxFloorArea.Value);

        if (search.MinRoomNumber.HasValue)
            query = query.Where(p => p.Rooms >= search.MinRoomNumber.Value);

        if (search.MaxRoomNumber.HasValue)
            query = query.Where(p => p.Rooms <= search.MaxRoomNumber.Value);

        if (search.Loan.Count > 0)
        {
            if (search.Loan.Contains("CSOK PLUS: Yes") && !search.Loan.Contains("CSOK PLUS: No"))
            {
                query = query.Where(p => p.Csok == true);
            }
            else if (!search.Loan.Contains("CSOK PLUS: Yes") && search.Loan.Contains("CSOK PLUS: No"))
            {
                query = query.Where(p => p.Csok == false);
            }
        }

        if (!string.IsNullOrEmpty(search.BuildType))
        {
            if (search.BuildType == "New construction")
                query = query.Where(p => p.IsNew == true);
            else if (search.BuildType == "Resale")
                query = query.Where(p => p.IsNew == false);
        }

        var result = query.ToList();

        return Ok(result);
    }
}