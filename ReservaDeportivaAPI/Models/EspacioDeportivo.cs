
public class EspacioDeportivo
{
    public int Id { get; set; }
    public string Nombre { get; set; } = string.Empty;
    public string Ubicacion { get; set; } = string.Empty;
    public List<HorarioDeporte> HorariosDisponibles { get; set; } = new List<HorarioDeporte>();
    public List<Reserva> Reservas { get; set; } = new List<Reserva>();
}

