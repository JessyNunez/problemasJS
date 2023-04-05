let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let count = 0;
let countPares = 0;
let sumImpar = 0;
for (let i = num1; i <= num2; i++) {
  console.log(i);
  count++;
  if (i % 2 == 0) {
    countPares++;
  } else {
    sumImpar += i;
  }
}
console.log("La suma de los números impares es: " + sumImpar);
