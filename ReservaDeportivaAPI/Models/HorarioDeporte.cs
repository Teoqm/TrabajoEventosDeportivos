
public class HorarioDeporte
{
    public int Id { get; set; }
    public string Deporte { get; set; }         // "Fútbol", "Tenis", etc.
    public DayOfWeek DiaSemana { get; set; }    // Lunes, Martes...
    public TimeSpan HoraInicio { get; set; }    // Ej: 09:00
    public TimeSpan HoraFin { get; set; }       // Ej: 18:00
    public int EspacioDeportivoId { get; set; }
}

