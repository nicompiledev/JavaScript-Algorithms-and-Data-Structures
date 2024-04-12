// Corrige el código para que la variable i, declarada en la sentencia if sea una variable separada de la variable i, declarada en la primera línea de la función. Asegúrate de no utilizar la palabra clave var en ninguna parte de tu código.

// Este ejercicio está diseñado para ilustrar la diferencia entre como las palabras claves var y let asignan ámbito a la variable declarada. Cuando programas una función similar a la que es usada en este ejercicio, es a menudo mejor usar diferentes nombres de variables para evitar confusión.

function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
