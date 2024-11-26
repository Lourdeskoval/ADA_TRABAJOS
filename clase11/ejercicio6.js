/*Ejercicio 6: La tabla de multiplicar
Consigna: Crea un programa que le pida al usuario un número y luego imprima su tabla de
multiplicar desde el 1 hasta el 10. Usa un ciclo for.*/

const prompt = require("prompt-sync")({ sigint: true });
let number = parseInt (prompt("Ingrese un numero para ver su tabla de multiplicacion: "));
if (number){
    console.log (`Tabla del numero ${number}: `);
}
for (let i = 1; i <= 10; i++){
    console.log(`${number} x ${i} = ${number * i}`);
}