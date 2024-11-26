/*Ejercicio 10: Adivina el número
Consigna: Crea un programa donde la computadora seleccione un número al azar entre 1
y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario
acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén
los intentos restantes. Si no acierta después de los 3 intentos, muestra el
número secreto. Usa un for para resolver este ejercicio.*/

const prompt = require("prompt-sync")({ sigint: true });

// genera un numero aleatorio entre 1 y 10.
let numeroRandom = Math.floor(Math.random() * 10) + 1;
// variable que define si el usuario adivino correctamente.
let adivinaste = false;

// le damos al usuario 3 intentos para adivinar.
for (let i = 1; i <= 3; i++){

    // le pedimos al usuario que adivine
     let numeroUsuario = parseInt(prompt(`Adivina un número entre 1 y 10, Intento ${i}: `));

     // verifica si la respuesta del usuario esta bien.     
     if (numeroUsuario == numeroRandom){
     console.log("¡Felicidades! Adivinaste el número!");
     adivinaste = true;
     
     break; //detenemos el circulo si el usuario acierta.
    } else {
     console.log("Número incorrecto, vuelve a intentarlo.");
    }
}
// mostrarle al usuario el numero que era si, no acertó en los 3 intentos.
     if(!adivinaste){
     console.log (`Se acabaron los intentos. El número era: ${numeroRandom}`);
     }



