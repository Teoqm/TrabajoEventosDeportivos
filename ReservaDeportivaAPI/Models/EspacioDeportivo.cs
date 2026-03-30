
public class EspacioDeportivo
{
    public int Id { get; set; }
    public string Nombre { get; set; }          // Ej: "Cancha de Fútbol 1"
    public string Ubicacion { get; set; }       // Dirección o coordenadas
    public int CapacidadMaxima { get; set; }    // Cantidad de personas
    public decimal PrecioPorHora { get; set; }
    public List<HorarioDeporte> HorariosDisponibles { get; set; }
    public List<Reserva> Reservas { get; set; }
}

