var calificaciones = [];

for (var i = 1; i <= 10; i++) {
  var calificacion = prompt("Introduce la calificación de la asignatura " + i + ":");
  calificacion = Number(calificacion);
  calificaciones.push(calificacion);
}

var suma = 0;
for (var i = 0; i < calificaciones.length; i++) {
  suma += calificaciones[i];
}

var media = suma / calificaciones.length;

console.log("La media de las calificaciones es: " + media);
