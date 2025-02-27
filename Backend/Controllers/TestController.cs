using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TestController : ControllerBase
{
    [HttpGet("Test")]
    public IActionResult Get()
    {
        return Ok(new {message = "test is working"});
    }
}