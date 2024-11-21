/*Escribe un programa que pida al usuario que ingrese tres números y
determine cuál es el mayor de los tres.*/

const prompt = require("prompt-sync")({ sigint: true });

let number1 = parseFloat (prompt("Ingrese un numero"));
let number2 = parseFloat (prompt("Ingrese otro numero"));
let number3 = parseFloat (prompt("vuelva a ingresar un numero"));

if (number1 > number2 && number2 > number3){
    console.log (`el mayor de los numeros que ingresaste es el numero ${number1}`);
}
else if (number2 > number1 && number2 > number3){
    console.log (`el mayor de los numeros que ingresaste es el numero ${number2}`);
}
else if (number3 > number1 && number3 > number2){
    console.log (`el mayor de los numero que ingresaste es el numero ${number3}`);
}
