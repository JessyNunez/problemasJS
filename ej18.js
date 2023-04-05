let frase = prompt("Introduce una frase: ");
let letra = prompt("Introduce la letra a buscar: ");

let count = 0;

for (let i = 0; i < frase.length; i++) {
  if (frase[i] === letra) {
    count++;
  }
}

console.log("La letra " + letra + " aparece " + count + " veces en la frase.");
