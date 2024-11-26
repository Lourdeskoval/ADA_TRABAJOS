/*Ejercicio 9: Cuenta regresiva para el despegue
Consigna:
Crea un programa que simule la cuenta regresiva para el lanzamiento de un cohete. El programa debe contar desde 
10 hasta 0 e imprimir "¡Despegue!" al final. Usa un ciclo for para realizar la cuenta regresiva.*/

const prompt = require("prompt-sync")({ sigint: true });

// muestrale al usuario el inicio de la cuenta regresiva.
console.log("Iniciando cuenta regresiva para el lanzamiento: ");

//recuento del programa de 10 a 0 con ciclo for.
for (let i = 10; i >= 0; i--){
    console.log(i); //aqui imprime el numero actual de la cuenta regresiva.
}
console.log("¡Despegue!"); //muestra el mensaje final 