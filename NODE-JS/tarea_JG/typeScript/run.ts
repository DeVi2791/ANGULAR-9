const saludo:string = 'Bienvenido a la tarea de TypeScript';

let palin = '';
let lower = '';
let multi3 = false;
let rango = false;

function verificarPalindromo(palabra:string) :void{

    lower = palabra.toLowerCase();
    
    for (var i = lower.length - 1; i >= 0; i--) { 
        palin += lower[i];
    }

    if(palin==lower){
        console.log('La palabra '+palabra+' es palindroma');
        palin = '';
    }else{
        console.log('La palabra '+palabra+' no es palindroma');
        palin = '';
    }
}

function verificarNumero(numero:number) :void{
    
    if(numero%3==0){
        multi3 = true;
    }

    if(numero>= 100 && numero<=200){
        rango = true;
    }

    if(multi3 && rango){
        multi3 = false;
        rango = false;
        console.log('El numero '+numero+' es multiplo de 3 y esta en el rango de 100 y 200');
    }else if(multi3 && !rango){
        multi3 = false;
        rango = false;
        console.log('El numero '+numero+' es multiplo de 3 pero no esta en el rango de 100 y 200');
    }else if (!multi3 && rango){
        multi3 = false;
        rango = false;
        console.log('El numero '+numero+' no es multiplo de 3 pero esta en el rango de 100 y 200');
    }else{
        multi3 = false;
        rango = false;
        console.log('El numero '+numero+' no es multiplo de 3 y no esta en el rango de 100 y 200');
    }
}



verificarPalindromo('1551');
verificarPalindromo('4004');
verificarPalindromo('Arepera');
verificarPalindromo('Reconocer');
verificarPalindromo('amar');
verificarPalindromo('134431');
verificarPalindromo('20202');
console.log('-----------------------------------------------------------------------------');
verificarNumero(66);
verificarNumero(99);
verificarNumero(123);
verificarNumero(139);
verificarNumero(229);
verificarNumero(155);
verificarNumero(130);
verificarNumero(233);