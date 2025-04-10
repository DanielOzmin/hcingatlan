using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace Backend.Models;

public class MessageUs
{
    [Key]
    public Guid MessageId { get; set; } = Guid.NewGuid();
    public Guid? EmployeeId { get; set; }
    public Employee? Employee { get; set; }
    public Guid? PropertyId { get; set; }
    public Property? Property { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public string Message { get; set; }
    public bool TermsAccepted { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}