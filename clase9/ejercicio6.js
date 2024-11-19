/*Pide al usuario que ingrese su edad y verifica si es mayor o menor de
edad. Muestra un mensaje personalizado según el caso.*/

const prompt = require("prompt-sync")({ sigint: true });
let number1 = parseFloat (prompt("Ingrese su edad"));
if (number1 >= 18){
    console.log (`eres mayor de edad`);
}
else{
    console.log (`eres menor de edad`);
}