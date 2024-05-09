import * as rls from 'readline-sync';

let userAns:string = rls.question("Desea calcular la potencia de un numero(s/n)? ")
let base:number;
let exp:number;


function getPotencia(){
        let result: number = base**exp;
        console.log('El resultado es: '+result);
}

while(userAns == "s"){
        base = rls.questionInt ("Ingrese numero de base: ");
        exp = rls.questionInt ("Ingrese numero exponente: ");
        
        if(exp>= 0){
                getPotencia();
        }
        else{
                console.log("El exponente ingresado es menor a cero, por favor intente nuevamente")
        }
        userAns = rls.question("Desea calcular la potencia de un numero(s/n)? ")


}