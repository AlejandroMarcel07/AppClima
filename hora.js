function actualizarHora() {
    var fecha = new Date(); // Obtén la fecha y hora actual
    var hora = fecha.getHours(); // Horas
    var minutos = fecha.getMinutes(); // Minutos
    var segundos = fecha.getSeconds(); // Segundos
  
    // Agrega un cero si es necesario para tener siempre dos dígitos
    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
  
    // Formato de la hora: HH:MM:SS
    var horaFormato = hora + ':' + minutos + ':' + segundos;
  
    // Actualiza el contenido del elemento h4
    document.getElementById('horaActual').textContent = ' Tiempo: '+horaFormato;
  }
  
  // Actualiza la hora cada segundo
  setInterval(actualizarHora, 1000);
  
  // Inicializa la hora al cargar la página
  actualizarHora();