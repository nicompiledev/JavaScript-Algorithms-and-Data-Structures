// Un arreglo es declarado como const s = [5, 7, 2]. Cambia el arreglo a [2, 5, 7] utilizando varias asignaciones de elementos.

const s = [5, 7, 2];
function editInPlace() {
  // Cambia solo el código debajo de esta línea
  // opcion 1
  // [s[0], s[1], s[2]] = [s[2], s[0], s[1]];

  // opcion 2
  s.splice(0, 1); // Elimina el primer elemento (5)
  s.push(5); // Agrega 5 al final
  s.sort(); // Ordena los elementos en orden ascendente

  // Cambia solo el código encima de esta línea
}
editInPlace();
