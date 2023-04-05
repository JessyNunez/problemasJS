let num = parseInt(prompt("Ingrese un número: "));
let count = 0;
for (let i = 1; i <= num; i++) {
  if (i % 3 == 0) {
    console.log(i);
    count++;
  }
}

