
// 1.Funciones

// Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.


function preguntaNota() {
    //  let nota = prompt("Introduce un número");

    switch (true) {

        // case nota <= 4:

        //     console.log("Insuficiente");
        //     break;

        // case nota < 4 && nota >= 7:

        //     console.log("Suficiente");
        //     break;

        // case nota > 6 && nota < 9:

        //     console.log("Notable");
        //     break;

        // case nota >= 9 && nota <= 10:

        //     console.log("Sobresaliente");
        //     break;

        default:

            console.log("No hay resultado");
            break;

    }
}
preguntaNota();


// Crea una función resta que espere dos parámetros a y b, y que devuelva la resta de los mismos.


function resta(a, b) {
    return a - b
}
console.log(resta(10, 4));

// Crea la función duplicaNumero. Debe recibir un tipo number y devolver el doble del valor recibido.
    //Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’

function duplicaNumero(numero) {
    if (typeof numero != "number") {
        return console.log("Debo ser ejecutada con un número");
    }
    return numero * 2
}

console.log(duplicaNumero(26));


// Crea la función caracterInicial. Debe recibir un tipo string y devolver un string con el primer carácter.
    // Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
    // Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'


function caracterInicial(string) {
    console.log(string)
    if (typeof string != "string") {
        return ("Debo ser ejecutada con un string");
    }
    else if (string === "") {
        return ("Debo ser ejecutada con un string no vacío")
    }
    return string[0];

}
console.log(caracterInicial(""));


// Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
    // Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
    // Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

// let string = "STRING"
function ultimoCaracter(string) {
    if (typeof string != "string") {
        return ("Debo ser ejecutada con un string");
    }
    else if (string === "") {
        return ("Debo ser ejecutada con un string no vacío")
    }
    // return string.slice(-1);
}
// console.log(string.slice(-1));
console.log(ultimoCaracter(9));


// Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
    // Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'

// let string = "Miguelito"
function cuentaCaracteres(string) {
    if (typeof string != "string"){
        return ("Debo ser ejecutada con un string")
    }
    return string.length;
}
// console.log(cuentaCaracteres(string));
console.log(cuentaCaracteres("Holiwi"))


// Un palíndromo es una palabra que se escribe igual del derecho que del revés, por ejemplo: orejero, rallar o somos.
//Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
    // Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'

function esPalindromo(texto){
    if (typeof texto != "string"){
        return ("No es un formato correcto")
    }
    else if (texto === ""){
        return ("No es un formato correcto")
    }

    const textoReversed = texto.split("").reverse().join("");
    return textoReversed === texto ? "Es un palíndromo" : "No es un palíndromo";
}
console.log(esPalindromo("pepito"));
console.log(esPalindromo(8));
console.log(esPalindromo(""));
console.log(esPalindromo("osso"));


// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales.
//Para 2 debería devolver 2.00 €.
    // Si la función no recibe un número debería devolver devolver 'no es un formato correcto'

function getPrecioMostrar(texto1){
    if (typeof texto1 != "number"){
        return ("No es un formato correcto")
    }
    return texto1.toFixed(2) && texto1.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
}
console.log(getPrecioMostrar(200));

// Crea la función division que acepte como argumento dos números y devuelva el resultado de su división

let a = 12
let b = 3
function division (){
    return a / b;

}
console.log(division(12, 3));

// Crea una función que, dada una array de números, devuelva una nueva array que tenga solo los números que son 5 o más.
//Ejemplo entrada [3, 6, 8, 2] salida [6, 8].

const array = [1,2,3,4,5,6,7,8,9,10]
function getArray(){
    return array.slice(4,11);
}
console.log(getArray(array));

// Crea una aplicación que nos pida un número por prompt
// y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo,
//debe devolver true si es primo sino false.
    // Un número primo es aquel que solo puede dividirse entre 1 y sí mismo.
    //Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.




function pideNumero(numero) {
    let question = prompt ("Introduce un número o moriré :(");
    for (var i = 2; i < numero; i++) {
  
      if (numero % i === 0) {
        return false;
      }
  
    }
      return numero !== 1;
  }
console.log(pideNumero());  //NO ME RECONOCE EL TIPO DE NÚMERO QUE INTRODUZCO EN EL PROMPT, SOLO LOS QUE INTRODUZCO EN EL console.log .