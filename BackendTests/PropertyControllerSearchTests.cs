using Backend.Controllers;
using Backend.Data;
using Backend.DTOs;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackendTests;

public class PropertyControllerSearchTests
{
    private async Task<ApplicationDbContext> GetDbContextWithData(List<Property> properties)
    {
        var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString())
            .Options;

        var context = new ApplicationDbContext(options);
        context.Properties.AddRange(properties);
        await context.SaveChangesAsync();
        return context;
    }
    
    private Property CreateBaseProperty(Action<Property> configure = null)
    {
        var property = new Property
        {
            Id = Guid.NewGuid(),
            PropertyId = Guid.NewGuid().ToString(),
            UploadDate = DateTime.Now,
            EmployeeId = Guid.NewGuid(),
            City = "Budapest",
            Street = "Test street",
            Price = 100000000,
            TransactionType = "Sale",
            PropertyType = "House",
            FloorArea = 80,
            Rooms = 3,
            ShortDescription = "Short desc",
            Description = "Long description",
            Featured = false,
            Csok = true
        };

        configure?.Invoke(property);
        return property;
    }

    [Fact]
    public async Task Filters_By_SelectedCategory_Test()
    {
        var context = await GetDbContextWithData(new()
        {
            CreateBaseProperty(p => p.TransactionType = "Sale"),
            CreateBaseProperty(p => p.TransactionType = "Rent")
        });
        
        var controller = new PropertyController(context);

        var dto = new PropertySearchDto { SelectedCategory = "Sale" };
        var result = await controller.GetPropertiesBySearch(dto);
        var ok = Assert.IsType<OkObjectResult>(result.Result);
        var list = Assert.IsAssignableFrom<IEnumerable<Property>>(ok.Value);
        
        Assert.Single(list);
    }

    [Fact]
    public async Task Filters_By_SelectedType_Test()
    {
        var context = await GetDbContextWithData(new()
        {
            CreateBaseProperty(p => p.PropertyType = "House"),
            CreateBaseProperty(p => p.PropertyType = "Apartment")
        });
        
        var controller = new PropertyController(context);

        var dto = new PropertySearchDto { SelectedType = new List<string> { "House" } };
        var result = await controller.GetPropertiesBySearch(dto);
        var list = (result.Result as OkObjectResult)?.Value as IEnumerable<Property>;
        
        Assert.Single(list);
    }

    [Fact]
    public async Task Filters_By_Locations_Test()
    {
        var context = await GetDbContextWithData(new()
        {
            CreateBaseProperty(p => p.District = "District V"),
            CreateBaseProperty(p => p.City = "Érd"),
            CreateBaseProperty(p => p.City = "Debrecen")
        });
        
        var controller = new PropertyController(context);

        var dto = new PropertySearchDto { Location = new() { "District V", "Érd" } };
        var result = await controller.GetPropertiesBySearch(dto);
        var list = (result.Result as OkObjectResult)?.Value as IEnumerable<Property>;
        Assert.Equal(2, list.Count());
    }

    [Fact]
    public async Task Filters_By_TypedId_Test()
    {
        var specialId = "ABC123";
        var context = await GetDbContextWithData(new()
        {
            CreateBaseProperty(p => p.PropertyId = specialId),
            CreateBaseProperty(p => p.PropertyId = "XYZ999")
        });
        var controller = new PropertyController(context);

        var dto = new PropertySearchDto { TypedId = specialId };
        var result = await controller.GetPropertiesBySearch(dto);
        var list = (result.Result as OkObjectResult)?.Value as IEnumerable<Property>;
        Assert.Single(list);
    }

    [Fact]
    public async Task Filters_By_Price_Sale_Test()
    {
        var context = await GetDbContextWithData(new()
        {
            CreateBaseProperty(p => p.Price = 120000000),
            CreateBaseProperty(p => p.Price = 50000000)
        });
        var controller = new PropertyController(context);

        var dto = new PropertySearchDto
        {
            SelectedCategory = "Sale",
            MinPrice = 100,
            MaxPrice = 130
        };
        var result = await controller.GetPropertiesBySearch(dto);
        var list = (result.Result as OkObjectResult)?.Value as IEnumerable<Property>;
        Assert.Single(list);
    }

    [Fact]
    public async Task Filters_By_FloorArea_And_Rooms()
    {
        var context = await GetDbContextWithData(new()
        {
            CreateBaseProperty(p => { p.FloorArea = 80; p.Rooms = 3; }),
            CreateBaseProperty(p => { p.FloorArea = 45; p.Rooms = 1; })
        });
        var controller = new PropertyController(context);

        var dto = new PropertySearchDto
        {
            MinFloorArea = 60,
            MaxFloorArea = 100,
            MinRoomNumber = 2,
            MaxRoomNumber = 4
        };
        var result = await controller.GetPropertiesBySearch(dto);
        var list = (result.Result as OkObjectResult)?.Value as IEnumerable<Property>;
        
        Assert.Single(list);
    }
    
    [Fact]
    public async Task Filters_By_FloorArea_And_Rooms_Negative_Test()
    {
        var context = await GetDbContextWithData(new()
        {
            CreateBaseProperty(p => { p.FloorArea = 80; p.Rooms = 3; }),
            CreateBaseProperty(p => { p.FloorArea = 45; p.Rooms = 1; })
        });
        var controller = new PropertyController(context);

        var dto = new PropertySearchDto
        {
            MinFloorArea = -10,
            MaxFloorArea = -1,
            MinRoomNumber = -2,
            MaxRoomNumber = -4
        };
        var result = await controller.GetPropertiesBySearch(dto);
        var list = (result.Result as OkObjectResult)?.Value as IEnumerable<Property>;
        
        Assert.Equal(2, list.Count());
    }

    [Fact]
    public async Task Filters_By_Loan_CSOK_Yes()
    {
        var context = await GetDbContextWithData(new()
        {
            CreateBaseProperty(p => p.Csok = true),
            CreateBaseProperty(p => p.Csok = false)
        });
        var controller = new PropertyController(context);

        var dto = new PropertySearchDto
        {
            Loan = new List<string> { "CSOK PLUS: Yes" }
        };
        var result = await controller.GetPropertiesBySearch(dto);
        var list = (result.Result as OkObjectResult)?.Value as IEnumerable<Property>;
        
        Assert.Single(list);
    }
    
    [Fact]
    public async Task Filters_By_Loan_CSOK_BOTH_Test()
    {
        var context = await GetDbContextWithData(new()
        {
            CreateBaseProperty(p => p.Csok = true),
            CreateBaseProperty(p => p.Csok = false)
        });
        var controller = new PropertyController(context);

        var dto = new PropertySearchDto
        {
            Loan = new List<string> { "CSOK PLUS: Yes","CSOK PLUS: No" }
        };
        var result = await controller.GetPropertiesBySearch(dto);
        var list = (result.Result as OkObjectResult)?.Value as IEnumerable<Property>;
        
        Assert.Equal(2, list.Count());
    }

    [Fact]
    public async Task Filters_By_BuildType_Test1()
    {
        var context = await GetDbContextWithData(new()
        {
            CreateBaseProperty(p => p.IsNew = true),
            CreateBaseProperty(p => p.IsNew = false)
        });
        var controller = new PropertyController(context);

        var dto = new PropertySearchDto { BuildType = "New construction" };
        var result = await controller.GetPropertiesBySearch(dto);
        var list = (result.Result as OkObjectResult)?.Value as IEnumerable<Property>;
        Assert.Single(list);
    }

    [Fact]
    public async Task Filters_By_BuildType_Test2()
    {
        var context = await GetDbContextWithData(new()
        {
            CreateBaseProperty(p => p.IsNew = true),
            CreateBaseProperty(p => p.IsNew = false)
        });
        var controller = new PropertyController(context);

        var dto = new PropertySearchDto { BuildType = "Resale" };
        var result = await controller.GetPropertiesBySearch(dto);
        var list = (result.Result as OkObjectResult)?.Value as IEnumerable<Property>;
        Assert.Single(list);
    }

    [Fact]
    public async Task No_Filter_Test()
    {
        var context = await GetDbContextWithData(new()
        {
            CreateBaseProperty(p => p.PropertyId = "A"),
            CreateBaseProperty(p => p.PropertyId = "B")
        });
        
        var controller = new PropertyController(context);

        var result = await controller.GetPropertiesBySearch(new PropertySearchDto());
        var list = (result.Result as OkObjectResult)?.Value as IEnumerable<Property>;
        
        Assert.Equal(2, list.Count());
    }
}