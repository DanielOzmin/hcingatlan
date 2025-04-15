namespace Backend.DTOs;

public class EmployeeDto
{
    public Guid Id { get; set; }
    public string PublicId { get; set; }
    public string Name { get; set; }
    public string Position { get; set; }
    public string Phone { get; set; }
    public string Email { get; set; }
    public string? Description { get; set; }
    
    public string Img { get; set; }
    public List<string> Properties { get; set; }
}