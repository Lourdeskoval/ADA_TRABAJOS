/*Ejercicio 7: Calculadora simple
Consigna:
Crea un programa que le pida al usuario dos números y una operación
matemática a realizar: suma, resta, multiplicación o división. Según la operación
ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario
ingresa una operación inválida, el programa debe mostrar un mensaje de error.
Usa switch para resolverlo.*/

const prompt = require("prompt-sync")({ sigint: true });
const numero1 = parseFloat(prompt("Ingrese el primer numero: "));
const numero2 = parseFloat(prompt("Ingrese el segundo numero: "));
const operacionMatematica = prompt("Operación matemática a realizar: suma, resta, multiplicación o division.");

let resultado;

switch (operacionMatematica) {
    case "suma": // si la operacion es suma
      resultado = numero1 + numero2;
      console.log (`El resultado de la suma es: ${resultado}`);
      break;
    case "resta": // si la operacion es resta
      resultado = numero1 - numero2;
      console.log (`El resultado de la resta es: ${resultado}`);
      break;
    case "multiplicacion": // si la operacion es multiplicacion
      resultado = numero1 * numero2;
      console.log (`El resultado de la multiplicacion es: ${resultado}`);
      break;
    case "division": // si la operacion es division
      if (numero2 !== 0){
      resultado = numero1 / numero2;
      console.log (`El resultado de la division es: ${resultado}`);
      } else {
        console.log (`Error, No se puede dividir entre cero.`);
      }
      break;
      default:
      console.log (`Alerta, operacion invalida.`);
}
