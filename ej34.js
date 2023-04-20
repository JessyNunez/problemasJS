var calificaciones = [];

for (var i = 1; i <= 10; i++) {
  var calificacion = prompt("Introduce la calificación de la asignatura " + i + ":");
  calificacion = Number(calificacion);
  calificaciones.push(calificacion);
}

var notaBuscada = prompt("Introduce la nota que deseas buscar:");
notaBuscada = Number(notaBuscada);

var encontrado = false;
for (var i = 0; i < calificaciones.length; i++) {
  if (calificaciones[i] === notaBuscada) {
    encontrado = true;
    break;
  }
}

if (encontrado) {
  console.log("La nota " + notaBuscada + " se encuentra en la lista de calificaciones.");
} else {
  console.log("La nota " + notaBuscada + " no se encuentra en la lista de calificaciones.");
}
