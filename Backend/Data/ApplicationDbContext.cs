using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data;

public class ApplicationDbContext : DbContext
{
    public DbSet<MessageUs> Messages { get; set; }
    public DbSet<Property> Properties { get; set; }
    public DbSet<Employee> Employees { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Employee>()
            .HasMany(e => e.Properties)
            .WithOne(p=>p.Employee)
            .HasForeignKey(p=>p.EmployeeId);
        
        modelBuilder.Entity<MessageUs>()
            .HasOne(m => m.Employee)
            .WithMany()
            .HasForeignKey(m => m.EmployeeId);
        
        modelBuilder.Entity<MessageUs>()
            .HasOne(m => m.Property)
            .WithMany()
            .HasForeignKey(m => m.PropertyId);
        
        modelBuilder.Entity<Property>()
            .HasOne(p => p.Employee)
            .WithMany(e => e.Properties)
            .HasForeignKey(p => p.EmployeeId);
    }
}