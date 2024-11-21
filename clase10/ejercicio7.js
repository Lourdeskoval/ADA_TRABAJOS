/*Ejercicio 7 - Intercambio de Valores: 
Declara dos variables con valores iniciales y luego intercambia sus valores. Muestra los valores antes y después del 
intercambio en la consola.
Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea), 
eres libre de elegir el que desees, eso si, investiga sobre el que usaras. */

const prompt = require("prompt-sync")({ sigint: true });

let a = 10; //15
let b = 15; //10

console.log (`Antes del inetrcambio los valores son: ${a} y ${b}`);
a = a + b;
b = a - b;
a = a - b;
console.log(`Despues del intercambio los valores son ${a} y ${b}`);

// otro de los metodos es el de la variable temporal:
let var1 = 50;
let var2 = 25;
let temporal;

console.log (`Antes del inetrcambio los valores son: ${var1} y ${var2}`);

temporal = var1;
var1 = var2;
var2 = temporal;

console.log (`Despues del intercambio los valores son ${var1} y ${var2}`);
