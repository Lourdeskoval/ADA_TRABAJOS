/*Enunciado:
En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un
programa en JavaScript que:
1. Pida al usuario que ingrese un número.
2. Verifique si el número es positivo, negativo o igual a cero.
3. Muestre un mensaje indicando cuál es el caso.
Requisitos:
• Utiliza una estructura de control de flujo (if, else if, else) para hacer las
verificaciones.
• Usa parseFloat() para convertir la entrada del usuario a un número.*/
const prompt = require("prompt-sync")({ sigint: true });
let numero = parseFloat(prompt("ingrese un numero, puede ser positivo o negativo: "));
if (numero > 0){
    console.log(`el numero ${numero} que ingresaste es positivo`)
}
else if(numero == 0){
    console.log(`el numero ${numero} que ingresaste es cero`)
}
else if(numero <0){
console.log(`el numero ${numero} que ingresaste es negativo`)
}
else {
    console.log(`lo que ingresaste no es un numero`)}
