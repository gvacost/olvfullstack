import fs from 'node:fs';

const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina","Queso"];

let preciosEnCadena : string = '';
let prodToString : string = '';

for (let i = 0; i<precios.length; i++){
    preciosEnCadena += `${precios[i]} `;
    prodToString += `${productos[i]} `; //prodToString = prodToString + productos[i]
}

fs.writeFileSync('./precios.txt', preciosEnCadena);

fs.writeFileSync('./productos.txt', prodToString);

console.log('\nSe han cargado los precios y productos respectivos\n');

let dataPrice :string = fs.readFileSync('./precios.txt', 'utf8');
let dataProd : string = fs.readFileSync('./productos.txt', 'utf8');

let preciosJuntos : string = dataPrice.trim();
let prodJuntos : string = dataProd.trim();

let preciosNew : string[] = preciosJuntos.split(' ');
let prodNew : string[] = prodJuntos.split(' ');



let preciosReW : number[] = new Array(preciosNew.length);

for(let i= 0; i<preciosNew.length; i++){
    let stringToNumber: number =0;
    stringToNumber = parseInt(preciosNew[i]);
    preciosReW[i] = stringToNumber; 
}

console.log('Los precios son:');
console.log(preciosReW);
console.log('\nLos productos son: ');
console.log(prodNew);
console.log('');
