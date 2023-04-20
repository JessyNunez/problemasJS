var matriz = new Array(4);
for (var i = 0; i < matriz.length; i++) {
  matriz[i] = new Array(5);
}

for (var fila = 0; fila < matriz.length; fila++) {
  for (var columna = 0; columna < matriz[fila].length; columna++) {
    var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    matriz[fila][columna] = numeroAleatorio;
  }
}

for (var fila = 0; fila < matriz.length; fila++) {
  console.log(matriz[fila]);
}
