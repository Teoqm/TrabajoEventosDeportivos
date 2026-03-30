
public class Usuario
{
    public int Id { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; }
    public string TwoFactorSecret { get; set; } // Para doble factor
    public List<Reserva> Reservas { get; set; }
}

