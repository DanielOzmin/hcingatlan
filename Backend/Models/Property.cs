namespace Backend.Models;

public class Property
{
    // Kötelező mezők
    public Guid Id { get; set; }
    public string PropertyId { get; set; }
    public DateTime UploadDate { get; set; }
    public Guid EmployeeId { get; set; }
    public Employee Employee { get; set; }
    public string City { get; set; }
    public string Street { get; set; }
    public int Price { get; set; }
    public string TransactionType { get; set; }
    public string PropertyType { get; set; }
    public int FloorArea { get; set; }
    public int Rooms { get; set; }
    public string ShortDescription { get; set; }
    public string Description { get; set; }
    public bool Featured { get; set; }
    public bool Csok { get; set; }

    // Opcionális mezők
    public int? Zip { get; set; }
    public string? District { get; set; }
    public string? Area { get; set; }
    public int? BalconySize { get; set; }
    public string? Orientation { get; set; }
    public string? Neighborhood { get; set; }
    public string? PropertyBuildType { get; set; }
    public int? YearOfConstruction { get; set; }
    public string? Ownership { get; set; }
    public string? MoveInDate { get; set; }
    public string? Conditions { get; set; }
    public string? Comfort { get; set; }
    public string? Attic { get; set; }
    public int? FloorsInBuilding { get; set; }
    public string? Elevator { get; set; }
    public string? Heating { get; set; }
    public double? Height { get; set; }
    public string? BathroomAndToilet { get; set; }
    public string? Balcony { get; set; }
    public int? Terrace { get; set; }
    public string? Accessible { get; set; }
    public string? GardenAccess { get; set; }
    public string? Entrance { get; set; }
    public string? View { get; set; }
    public string? Parking { get; set; }
    public List<string>? Extras { get; set; }
    public List<string>? Img { get; set; }
    public int? Floor { get; set; }
    public int? Parcel { get; set; }
}