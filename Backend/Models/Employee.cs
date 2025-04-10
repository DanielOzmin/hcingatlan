namespace Backend.Models;

public class Employee
{
    public Guid Id { get; set; }
    public string PublicId { get; set; }
    public string Name { get; set; }
    public string Position { get; set; }
    public string Phone { get; set; }
    public string Email { get; set; }
    public string? Description { get; set; }
    
    public string Img { get; set; }
    public ICollection<Property> Properties { get; set; } = new List<Property>();
}