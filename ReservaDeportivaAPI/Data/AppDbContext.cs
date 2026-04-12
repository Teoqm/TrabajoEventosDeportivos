using Microsoft.EntityFrameworkCore;
using ReservaDeportivaAPI.Models;

namespace ReservaDeportivaAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Reserva> Reservas { get; set; }
        public DbSet<EspacioDeportivo> EspaciosDeportivos { get; set; }
        public DbSet<HorarioDeporte> HorariosDeporte { get; set; }
    

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configurar que email sea único para los usuarios
            modelBuilder.Entity<Usuario>()
                .HasIndex(u => u.Email)
                .IsUnique();
        }
}
}