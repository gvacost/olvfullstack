"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrNumerico = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
var valorMayor = arrNumerico[0];
arrNumerico.forEach(function (i) {
    var mayorArr = arrNumerico[i];
    if (mayorArr > valorMayor) {
        valorMayor = mayorArr;
    }
    else {
        valorMayor = valorMayor;
    }
    return valorMayor;
});
console.log('El valor mayor del array es: ' + valorMayor);
function parImpar() {
    var result = valorMayor % 2;
    if (result == 0) {
        console.log('El numero es Par!');
    }
    else {
        console.log('El numero es Impar!');
    }
}
;
parImpar();
