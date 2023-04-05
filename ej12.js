let sumapar = 0;
let sumaipar = 0;
for (let i = 1; i <= 100; i++) {
  console.log(i);
  if (i % 2 == 0) {
    sumapar += i;
  } else {
    sumaimpar += i;
  }
}
console.log("La suma de los números pares es: " + sumapar);
console.log("La suma de los números impares es: " + sumaimpar);
