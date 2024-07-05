import * as readlineSync from "readline-sync";

let decide = readlineSync.question('Bienvenido a Par/Impar, quiere jugar(Si/No)? ');

if(decide == 'Si'){
    while(decide == 'Si'){
        let numUser = readlineSync.questionInt('Por favor ingrese un numero: ');

        if (numUser == 0){

            console.log('El numero ingresado es cero, por favor ingrese otro numero distinto');

            numUser = readlineSync.questionInt('Por favor ingrese un numero: ');

        }
        else{
            let result = numUser % 2;

            if (result == 0){
                console.log('El numero es Par!');
            }else{
                console.log('El numero es Impar!');
            }
        }

        decide = readlineSync.question('Quiere volver a jugar(Si/No)? ');
        if(decide == 'No'){
                console.log('Muchas gracias!')
        }
    }
}else{
    console.log('Muchas gracias!')
}

