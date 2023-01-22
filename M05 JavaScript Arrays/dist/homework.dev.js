"use strict";

/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido por parámetro.
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido por parámetro.
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Retornar la longitud del arreglo recibido por parámetro.
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // El arreglo recibido por parámetro contiene números.
  // Retornar un arreglo con los elementos incrementados en +1.
  // Tu código:
  var nuevoArray = [];

  for (var i = 0; i < array.length; i++) {
    nuevoArray.push(array[i] + 1);
  }

  return nuevoArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retornar un string donde todas las palabras estén concatenadas
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  return palabras.join(' ');
}

function arrayContiene(array, elemento) {
  // Verifica si el elemento existe dentro del arreglo recibido.
  // Retornar True si está, o False si no está.
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true;
    }
  }

  return false;
}

function agregarNumeros(arrayOfNums) {
  // El parámetro "arrayOfNums" debe ser un arreglo de números.
  // Suma todos los elementos y retorna el resultado.
  // Tu código:
  var suma = 0;

  for (var i = 0; i < arrayOfNums.length; i++) {
    suma += arrayOfNums[i];
  }

  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // El parámetro "resultadosTest" es un arreglo de números.
  // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
  // Tu código:
  var promedio = 0;

  for (var i = 0; i < resultadosTest.length; i++) {
    promedio += resultadosTest[i];
  }

  return promedio / resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
  // El parámetro "arrayOfNums" es un arreglo de números.
  // Retornar el número más grande.
  // Tu código:
  var masGrande = 0;

  for (var i = 0; i < arrayOfNums.length; i++) {
    if (arrayOfNums[i] > masGrande) {
      masGrande = arrayOfNums[i];
    }
  }

  return masGrande;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  var producto = 1;

  for (var i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
  }

  if (arguments == null) {
    return 0;
  } else {
    return producto;
  }
}

function cuentoElementos(array) {
  // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
  // Tu código:
  var cantidadElementos = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] > 18) {
      cantidadElementos++;
    }
  }

  return cantidadElementos;
}

function diaDeLaSemana(numeroDeDia) {
  // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
  // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
  // Tu código:
  if (numeroDeDia == 1) {
    return "Domingo";
  } else if (numeroDeDia == 2) {
    return "Lunes";
  } else {
    return "Sábado";
  }
}

function empiezaConNueve(num) {
  // Esta función recibe por parámetro un número.
  // Debe retornar True si el entero inicia con 9 y False en otro caso.
  // Tu código:
  if (num != 9) {
    return false;
  } else {
    return true;
  }
}

function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar True.
  // Caso contrario retornar False.
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    if (array[i] == array[i]) {
      return true;
    }
  }

  return false;
}

function mesesDelAño(array) {
  // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  var mesesPedidos = [];

  for (var i = 0; i < meses.length; i++) {
    if (array.indexOf(meses[i]) != -1) {
      mesesPedidos.push(meses[i]);
    }
  }
}

function tablaDelSeis() {
  // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Tu código:
  var tabla = [];

  for (var i = 0; i <= 10; i++) {
    tabla.push(i * 6);
  }

  return tabla;
}

function mayorACien(array) {
  // La función recibe un arreglo con enteros entre 0 y 200.
  // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
  // Tu código:
  var mayor = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      mayor.push(array[i]);
    }
  }

  return mayor;
}
/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/


function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retornarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // [PISTA]: utiliza el statement 'break'.
  // Tu código:
  for (var i = 0; i < 10; i++) {
    if (i == num) {
      break;
    } else {
      suma += i;
    }
  }

  if (suma == num) {}

  return "Se interrumpió la ejecución";
}

function continueStatement(num) {} // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
// Guardar cada nuevo valor en un array y retornarlo.
// Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
// se continua con la siguiente iteración.
// [PISTA]: utiliza el statement 'continue'.
// Tu código:

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/


module.exports = {
  devolverPrimerElemento: devolverPrimerElemento,
  devolverUltimoElemento: devolverUltimoElemento,
  obtenerLargoDelArray: obtenerLargoDelArray,
  incrementarPorUno: incrementarPorUno,
  agregarItemAlFinalDelArray: agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray: agregarItemAlComienzoDelArray,
  dePalabrasAFrase: dePalabrasAFrase,
  arrayContiene: arrayContiene,
  agregarNumeros: agregarNumeros,
  promedioResultadosTest: promedioResultadosTest,
  numeroMasGrande: numeroMasGrande,
  multiplicarArgumentos: multiplicarArgumentos,
  cuentoElementos: cuentoElementos,
  diaDeLaSemana: diaDeLaSemana,
  empiezaConNueve: empiezaConNueve,
  todosIguales: todosIguales,
  mesesDelAño: mesesDelAño,
  tablaDelSeis: tablaDelSeis,
  mayorACien: mayorACien,
  breakStatement: breakStatement,
  continueStatement: continueStatement
};