using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        //Esto creara una tabla llamada users
        public DbSet<AppUser> Users { get; set; }
    }
}