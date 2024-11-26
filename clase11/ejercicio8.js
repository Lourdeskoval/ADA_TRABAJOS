/*Ejercicio 8: Encuentra los múltiplos de un número
Consigna: Escribe un programa que le pida al usuario un número entero positivo y
muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for para resolverlo.*/

const prompt = require("prompt-sync")({ sigint: true });

// solicite al usuario un numero entero positivo:
let numero = parseInt(prompt("Introduce un numero entero positivo: "));

// para verificar si el numero ingresado es positivo:
if (numero > 0){
    console.log(`Los múltiplos de ${numero} entre 1 y 100:`);

// ciclo for para encontrar los multiplos
    for (let i = 1; i <= 100; i++){
        if (i % numero === 0){
            console.log (i);
        }
    } 
} else {
    console.log("El numero ingresado NO es positivo, intente de nuevo. ");
}
