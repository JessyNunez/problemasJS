let num1 = parseInt(prompt("Introduce un número: "));
let num2 = parseInt(prompt("Introduce otro número: "));

let count = 0;
let sum = 0;

for (let i = num1; i <= num2; i++) {
  if (i % 2 === 0) {
    console.log(i);
    count++;
    sum += i;
  }
}
console.log("Suma de los múltiplos de 2: " + sum);
