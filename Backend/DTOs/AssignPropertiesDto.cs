namespace Backend.DTOs;

public class AssignPropertiesDto
{
    public Guid EmployeeId { get; set; }
    public List<string> PropertyIds { get; set; } = new();
}