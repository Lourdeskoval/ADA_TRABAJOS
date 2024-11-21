/*Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la
semana correspondiente. Si el número no está dentro de ese rango,
muestra un mensaje de error.*/

const prompt = require("prompt-sync")({ sigint: true });

let weekday = parseFloat(prompt("Ingrese un numero del 1 al 7"));

if (weekday == 1){
    console.log (`su numero ${weekday} se traduce al dia de la semana Lunes`);
}
else if (weekday == 2){
    console.log (`su numero ${weekday} se traduce al dia de la semana Martes`);
}
else if (weekday == 3){
    console.log (`su numero ${weekday} se traduce al dia de la semana Miercoles`);
}
else if (weekday == 4){
    console.log (`su numero ${weekday} se traduce al dia de la semana Jueves`);
}
else if (weekday == 5){
    console.log (`su numero ${weekday} se traduce al dia de la semana Viernes`);
}
else if (weekday == 6){
    console.log (`su numero ${weekday} se traduce al dia de la semana Sabado`);
}
else if (weekday == 7){
    console.log (`su numero ${weekday} se traduce al dia de la semana Domingo`);
}
else{
console.log (`Su numero NO puede traducirse a un dia de la semana`);
}