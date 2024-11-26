/* Ejercicio 3: ¿Sabes contar? Consigna:
Crea un programa que le pida al usuario un número positivo. El programa
deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola.
Usa un ciclo for para realizar la tarea.*/

const prompt = require("prompt-sync")({ sigint: true });
let number = parseInt(prompt("please enter a positive number: "));

for (let i = 0; i < number; i++){
    console.log(`counting up to ${i + 1}`);
}
