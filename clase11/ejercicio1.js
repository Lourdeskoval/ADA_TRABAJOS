/*Consigna:
Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa
que le pida al usuario un número cualquiera. El programa deberá analizar si el
número ingresado es positivo, negativo o cero. Utiliza estructuras if para
resolverlo y muestra un mensaje explicativo en cada caso.*/

const prompt = require("prompt-sync")({ sigint: true });

let number = parseInt (prompt("Ingrese un numero: "));

if (number > 0){
    console.log(`El numero ${number} que ingresaste es positivo`);
}
else if (number < 0){
    console.log(`El numero que ingresaste es negativo`);
}
else if (number === 0){
    console.log (`El numero que ingresaste es cero`);
}
