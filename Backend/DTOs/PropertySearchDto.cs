namespace Backend.DTOs;

public class PropertySearchDto
{
    public string? SelectedCategory { get; set; }
    public List<string>? SelectedType { get; set; } = new();
    public List<string>? Location { get; set; } = new();
    public List<string>? Loan { get; set; } = new();
    public string? TypedId { get; set; }
    public int? MinPrice { get; set; }
    public int? MaxPrice { get; set; }
    public int? MinFloorArea { get; set; }
    public int? MaxFloorArea { get; set; }
    public int? MinRoomNumber { get; set; }
    public int? MaxRoomNumber { get; set; }
    public string? BuildType { get; set; }
}