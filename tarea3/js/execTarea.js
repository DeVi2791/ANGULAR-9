var saludo = 'Bienvenido a la tarea de TypeScript';
var palin = '';
var lower = '';
var multi3 = false;
var rango = false;
function verificarPalindromo(palabra) {
    lower = palabra.toLowerCase();    

    for (var i = lower.length - 1; i >= 0; i--) {
        palin += lower[i];
    }
    if (palin == lower) {
        console.log('La palabra ' + palabra + ' es palindroma');
        return 'La palabra ' + palabra + ' es palindroma';
        palin = '';
    }
    else {
        console.log('La palabra ' + palabra + ' no es palindroma');
        return 'La palabra ' + palabra + ' no es palindroma';
        palin = '';
    }
}
function verificarNumero(numero) {
    if (numero % 3 == 0) {
        multi3 = true;
    }
    if (numero >= 100 && numero <= 200) {
        rango = true;
    }
    if (multi3 && rango) {
        multi3 = false;
        rango = false;
        console.log('El numero ' + numero + ' es multiplo de 3 y esta en el rango de 100 y 200');
        return 'El numero ' + numero + ' es multiplo de 3 y esta en el rango de 100 y 200';
    }
    else if (multi3 && !rango) {
        multi3 = false;
        rango = false;
        console.log('El numero ' + numero + ' es multiplo de 3 pero no esta en el rango de 100 y 200');
        return 'El numero ' + numero + ' es multiplo de 3 pero no esta en el rango de 100 y 200';
    }
    else if (!multi3 && rango) {
        multi3 = false;
        rango = false;
        console.log('El numero ' + numero + ' no es multiplo de 3 pero esta en el rango de 100 y 200');
        return 'El numero ' + numero + ' no es multiplo de 3 pero esta en el rango de 100 y 200';
    }
    else {
        multi3 = false;
        rango = false;
        console.log('El numero ' + numero + ' no es multiplo de 3 y no esta en el rango de 100 y 200');
        return 'El numero ' + numero + ' no es multiplo de 3 y no esta en el rango de 100 y 200';
    }
}

function verifPalabra(){
    let palabra = document.getElementsByName('txt_pal')[0].value;

    document.getElementById("resultpalindromo").innerHTML = verificarPalindromo(palabra);
    
}
function verifNumero(){
    let numero = document.getElementsByName('txt_num')[0].value;

    if (isNaN(numero)){
        alert('No es una cantidad válida');
        return;
    }

    document.getElementById("resultMultiplo3").innerHTML = verificarNumero(numero);
    
}
