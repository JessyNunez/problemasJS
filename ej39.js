const paginas = 3;
const filas = 4;
const columnas = 5;

let valor = 1;

for (let pagina = 1; pagina <= paginas; pagina++) {

  let tabla = document.createElement("table");

  for (let fila = 1; fila <= filas; fila++) {

    let filaTabla = document.createElement("tr");

    for (let columna = 1; columna <= columnas; columna++) {

      let celda = document.createElement("td");

      celda.innerHTML = valor;

      valor++;

      filaTabla.appendChild(celda);
    }

    tabla.appendChild(filaTabla);
  }

  document.body.appendChild(tabla);
}
