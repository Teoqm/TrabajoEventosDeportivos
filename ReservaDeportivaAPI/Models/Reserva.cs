
public class Reserva
{
    public int Id { get; set; }
    public DateTime FechaReserva { get; set; }   // Día concreto
    public TimeSpan HoraInicio { get; set; }
    public TimeSpan HoraFin { get; set; }
    public int NumeroPersonas { get; set; }
    public decimal MontoPagado { get; set; }
    public string EstadoPago { get; set; } = string.Empty;    // "Pendiente", "Pagado"
    public int UsuarioId { get; set; }
    public int EspacioDeportivoId { get; set; }
}