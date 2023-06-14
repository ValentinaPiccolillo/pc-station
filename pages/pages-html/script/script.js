// Lugar para establecer la fecha en la que estamos contando para atras
var countDownDate = new Date("may 31, 2023 00:00:00").getTime();

// Obtener fecha y hora
var x = setInterval(function() {

  // Actualizar la cuenta atras
  var now = new Date().getTime();
    
  // Encontrar la distancia entre ahora y la fecha de cuenta regresiva
  var distance = countDownDate - now;
    
  // Calculos de tiempo para dias, horas, minutos y segundos
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Salida del resultado del elemento con id="tiempo"
  document.getElementById("tiempo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // Si la cuenta regresiva ha terminado, escriba un texto
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("tiempo").innerHTML = "OFERTAS TERMINADAS";
  }
}, 1000);

//----------------------------------
