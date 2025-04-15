using Backend.Data;
using Backend.DTOs;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public EmployeeController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
    {
        var employees = await _context.Employees.Include(e => e.Properties).ToListAsync();
        var employeeList = new List<EmployeeDto>();
        foreach (var employee in employees)
        {
           var dto = new EmployeeDto
           {
               Id = employee.Id,
               PublicId = employee.PublicId,
               Name = employee.Name,
               Position = employee.Position,
               Phone = employee.Phone,
               Email = employee.Email,
               Description = employee.Description,
               Img = employee.Img,
               Properties = employee.Properties.Select(p => p.PropertyId).ToList()
           }; 
           employeeList.Add(dto);
        }
        return Ok(employeeList);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Employee>> GetEmployee(string id)
    {
        Employee? employee;

        if (Guid.TryParse(id, out Guid guidId))
        {
            employee = await _context.Employees
                .Include(e => e.Properties)
                .FirstOrDefaultAsync(e => e.Id == guidId);
        }
        else
        {
            employee = await _context.Employees
                .FirstOrDefaultAsync(e => e.PublicId == id);
        }

        if (employee == null)
        {
            return NotFound();
        }

        var dto = new EmployeeDto
        {
            Id = employee.Id,
            PublicId = employee.PublicId,
            Name = employee.Name,
            Position = employee.Position,
            Phone = employee.Phone,
            Email = employee.Email,
            Description = employee.Description,
            Img = employee.Img,
            Properties = employee.Properties.Select(p => p.PropertyId).ToList()
        };
        
        return Ok(dto);
    }
    
    //added temporary endpoint:

    [HttpPost("assign-properties")]
    public IActionResult AssignPropertiesToEmployee([FromBody] AssignPropertiesDto dto)
    {
        var employee = _context.Employees
            .Include(e => e.Properties)
            .FirstOrDefault(e => e.Id == dto.EmployeeId);

        if (employee == null)
            return NotFound("Employee not found");

        var properties = _context.Properties
            .Where(p => dto.PropertyIds.Contains(p.PropertyId))
            .ToList();

        foreach (var prop in properties)
        {
            prop.EmployeeId = employee.Id;
        }

        _context.SaveChanges();
        
        employee = _context.Employees
            .Include(e => e.Properties)
            .FirstOrDefault(e => e.Id == dto.EmployeeId);

        var result = new EmployeeDto
        {
            Id = employee.Id,
            PublicId = employee.PublicId,
            Name = employee.Name,
            Position = employee.Position,
            Phone = employee.Phone,
            Email = employee.Email,
            Description = employee.Description,
            Img = employee.Img,
            Properties= employee.Properties.Select(p => p.PropertyId).ToList()
        };

        return Ok(result);
    }
}