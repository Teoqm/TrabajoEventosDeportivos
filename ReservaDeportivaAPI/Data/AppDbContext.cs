using Microsoft.EntityFrameworkCore;
using ReservasDeportivasAPI.Models;

namespace ReservasDeportivasAPI.Data
{
    // se cerea la base de datos
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) 
            : base(options) { }

        // Estas propiedades se convierten en tablas en la BD
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Reserva> Reservas { get; set; }
        public DbSet<EspacioDeportivo> Espacios { get; set; } 

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configurar que email sea único para los usuarios
            modelBuilder.Entity<Usuario>()
                .HasIndex(u => u.Email)
                .IsUnique();
        }
    }
}