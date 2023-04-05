let fr = 0;
let word = "";
while (word !== "hola soy jessy") {
  word = prompt("Introduce una palabra (escribe 'hola soy jessy' para terminar): ");
  if (word !== "hola soy jessy") {
    fr++;
  }
}
console.log("Has introducido " + fr + " palabras.");
