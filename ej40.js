let ventas = [  [[10, 15, 20, 25], [5, 10, 15, 20], [7, 14, 21, 28], [12, 24, 36, 48], [18, 36, 54, 72], [30, 60, 90, 120], [25, 50, 75, 100], [20, 40, 60, 80], [15, 30, 45, 60], [10, 20, 30, 40], [5, 10, 15, 20], [3, 6, 9, 12]],
  [[5, 10, 15, 20], [8, 16, 24, 32], [12, 24, 36, 48], [18, 36, 54, 72], [25, 50, 75, 100], [30, 60, 90, 120], [35, 70, 105, 140], [28, 56, 84, 112], [20, 40, 60, 80], [15, 30, 45, 60], [10, 20, 30, 40], [5, 10, 15, 20]],
  [[12, 24, 36, 48], [18, 36, 54, 72], [25, 50, 75, 100], [30, 60, 90, 120], [35, 70, 105, 140], [28, 56, 84, 112], [20, 40, 60, 80], [15, 30, 45, 60], [10, 20, 30, 40], [5, 10, 15, 20], [3, 6, 9, 12], [1, 2, 3, 4]]
];

let totalVentas = [];

for (let mes = 0; mes < 12; mes++) {
  totalVentas[mes] = [];
  for (let producto = 0; producto < 4; producto++) {
    totalVentas[mes][producto] = 0;
  }
}

for (let mes = 0; mes < 12; mes++) {
  for (let producto = 0; producto < 4; producto++) {
    let total = 0;
    for (let representante = 0; representante < 3; representante++) {
      total += ventas[representante][mes][producto];
    }
    totalVentas[mes][producto] = total;
  }
}

console.log("VENTAS:");
console.log(ventas);
console.log("TOTAL:");
console.log(totalVentas);
