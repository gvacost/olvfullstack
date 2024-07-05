"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var userAns = rls.question("Desea calcular la potencia de un numero(s/n)? ");
var base;
var exp;
var result;
function getPotencia() {
    var mult = 1;
    // console.log('El resultado es: '+result);
    if (exp > 0) {
        for (var i = 0; i < exp; i++) {
            mult *= base;
            result = mult;
        }
        console.log('El resultado es: ' + result);
    }
    else {
        result = mult;
        console.log('El resultado es: ' + result);
    }
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
