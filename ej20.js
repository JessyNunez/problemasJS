function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const numero = parseInt(prompt('Ingresa un número'));
const resultado = factorial(numero);
alert(`El factorial de ${numero} es ${resultado}`);
