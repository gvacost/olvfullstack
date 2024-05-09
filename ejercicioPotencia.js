"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var userAns = rls.question("Desea calcular la potencia de un numero(s/n)? ");
var base;
var exp;
function getPotencia() {
    var result = Math.pow(base, exp);
    console.log('El resultado es: ' + result);
}
while (userAns == "s") {
    base = rls.questionInt("Ingrese numero de base: ");
    exp = rls.questionInt("Ingrese numero exponente: ");
    if (exp >= 0) {
        getPotencia();
    }
    else {
        console.log("El exponente ingresado es menor a cero, por favor intente nuevamente");
    }
    userAns = rls.question("Desea calcular la potencia de un numero(s/n)? ");
}
