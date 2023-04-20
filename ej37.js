var numeroCursos = prompt("Introduce el número de cursos:");
var numeroAlumnosPorCurso = prompt("Introduce el número de alumnos por curso:");

var notas = new Array(numeroCursos);
for (var i = 0; i < notas.length; i++) {
  notas[i] = new Array(numeroAlumnosPorCurso);
}

for (var curso = 0; curso < notas.length; curso++) {
  console.log("Curso " + (curso + 1) + ":");
  for (var alumno = 0; alumno < notas[curso].length; alumno++) {
    var nota = prompt("Introduce la nota del alumno " + (alumno + 1) + " del curso " + (curso + 1) + ":");
    notas[curso][alumno] = parseFloat(nota);
  }
}

for (var curso = 0; curso < notas.length; curso++) {
  console.log("Notas del curso " + (curso + 1) + ":");
  for (var alumno = 0; alumno < notas[curso].length; alumno++) {
    console.log("Alumno " + (alumno + 1) + ": " + notas[curso][alumno]);
  }
}
