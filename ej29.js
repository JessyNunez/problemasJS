var numero = prompt("Introduce un número:");

numero = Number(numero);

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

if (esPrimo(numero)) {
  console.log("El número " + numero + " es primo");
} else {
  console.log("El número " + numero + " no es primo");
}

function factorial(numero) {
  var resultado = 1;
  for (var i = 1; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log("El factorial de " + numero + " es: " + factorial(numero));

console.log("Tabla de multiplicar de " + numero + ":");

for (var i = 1; i <= 10; i++) {
  var resultado = numero * i;
  console.log(numero + " x " + i + " = " + resultado);
}
