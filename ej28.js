var numero1 = prompt("Introduce el primer número:");
var numero2 = prompt("Introduce el segundo número:");

numero1 = Number(numero1);
numero2 = Number(numero2);


var opcion = prompt("Selecciona una operación:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División");

switch(opcion) {
  case "1":
    var resultado = numero1 + numero2;
    alert("El resultado de la suma es: " + resultado);
    break;
  case "2":
    var resultado = numero1 - numero2;
    alert("El resultado de la resta es: " + resultado);
    break;
  case "3":
    var resultado = numero1 * numero2;
    alert("El resultado de la multiplicación es: " + resultado);
    break;
  case "4":
    var resultado = numero1 / numero2;
    alert("El resultado de la división es: " + resultado);
    break;
  default:
    alert("Opción no válida");
}




