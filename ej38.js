var matriz = new Array(
  [6, 9, 2],
  [1, 5, 8],
  [7, 3, 4]
);

function ordenarPorColumna(matriz) {
  var tamanoPaso = Math.floor(matriz.length / 2);
  while (tamanoPaso > 0) {
    for (var i = tamanoPaso; i < matriz.length; i++) {
      var j = i;
      while (j >= tamanoPaso && matriz[j - tamanoPaso][0] > matriz[j][0]) {
        var temp = matriz[j][0];
        matriz[j][0] = matriz[j - tamanoPaso][0];
        matriz[j - tamanoPaso][0] = temp;
        j -= tamanoPaso;
      }
    }
    tamanoPaso = Math.floor(tamanoPaso / 2);
  }
  return matriz;
}

console.log("Matriz sin ordenar:");
for (var i = 0; i < matriz.length; i++) {
  console.log(matriz[i].join("\t"));
}

ordenarPorColumna(matriz);

console.log("Matriz ordenada por la primera columna:");
for (var i = 0; i < matriz.length; i++) {
  console.log(matriz[i].join("\t"));
}
