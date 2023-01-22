"use strict";

// Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
// La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
// Tu código:
var tabla = [];

for (var i = 0; i <= 60; i++) {
  tabla.push(i * 6);
}

console.log(tabla);