function actualizarHora() {
  var fecha = new Date(); // Obtén la fecha y hora actual
  var hora = fecha.getHours(); // Horas en formato 24h
  var minutos = fecha.getMinutes(); // Minutos
  var segundos = fecha.getSeconds(); // Segundos
  var ampm = hora >= 12 ? 'PM' : 'AM'; // Establece AM o PM

  // Convierte la hora a formato 12h
  hora = hora % 12;
  hora = hora ? hora : 12; // La hora '0' debe ser '12'

  // Agrega un cero si es necesario para tener siempre dos dígitos
  minutos = minutos < 10 ? '0' + minutos : minutos;
  segundos = segundos < 10 ? '0' + segundos : segundos;

  // Formato de la hora: HH:MM:SS AM/PM
  var horaFormato = hora + ':' + minutos +  ' ' + ampm;

  // Actualiza el contenido del elemento h4
  document.getElementById('horaActual').textContent =   horaFormato;
}

// Actualiza la hora cada segundo
setInterval(actualizarHora, 1000);

// Inicializa la hora al cargar la página
actualizarHora();
