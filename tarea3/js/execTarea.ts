const saludo:string = 'Bienvenido a la tarea de TypeScript';

let palin = '';
let lower = '';
let multi3 = false;
let rango = false;

function verificarPalindromo(palabra:string) :string{

    lower = palabra.toLowerCase();
    
    for (var i = lower.length - 1; i >= 0; i--) { 
        palin += lower[i];
    }

    if(palin==lower){
        console.log('La palabra '+palabra+' es palindroma');
        return 'La palabra '+palabra+' es palindroma';
        palin = '';
    }else{
        console.log('La palabra '+palabra+' no es palindroma');
        return 'La palabra '+palabra+' no es palindroma';
        palin = '';
    }
}

function verificarNumero(numero:number) :string{
    
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
        return 'El numero '+numero+' es multiplo de 3 y esta en el rango de 100 y 200';
    }else if(multi3 && !rango){
        multi3 = false;
        rango = false;
        console.log('El numero '+numero+' es multiplo de 3 pero no esta en el rango de 100 y 200');
        return 'El numero '+numero+' es multiplo de 3 pero no esta en el rango de 100 y 200';
    }else if (!multi3 && rango){
        multi3 = false;
        rango = false;
        console.log('El numero '+numero+' no es multiplo de 3 pero esta en el rango de 100 y 200');
        return 'El numero '+numero+' no es multiplo de 3 pero esta en el rango de 100 y 200';
    }else{
        multi3 = false;
        rango = false;
        console.log('El numero '+numero+' no es multiplo de 3 y no esta en el rango de 100 y 200');
        return 'El numero '+numero+' no es multiplo de 3 y no esta en el rango de 100 y 200';
    }
}