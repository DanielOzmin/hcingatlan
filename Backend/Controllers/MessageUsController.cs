using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MessageUsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public MessageUsController(ApplicationDbContext context)
    {
        _context = context;
    }


    [HttpPost]
    public async Task<IActionResult> PostMessage([FromBody] MessageUs message)
    {
        Console.WriteLine("műkszik");
        message.CreatedAt = DateTime.UtcNow;
        _context.Messages.Add(message);
        await _context.SaveChangesAsync();
        
        return Ok(new {message = "Message has been added"});
    }
}