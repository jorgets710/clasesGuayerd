// Solicitar al usuario que ingrese un texto y validar si contiene la letra “a”.
function validarA() {
    let texto;
    texto = prompt('Ingrese un texto');
    if (texto.includes("a") == true || texto.includes("A")) {
        alert("Contiene la letra A");
    } else {
        alert("No contiene la letra A");
    }
}
//Solicitar al usuario que ingrese un texto y mostrarlo todo en minúsculas y todo en mayúsculas.
function minuscula (){
    let texto = prompt ("ingrese el texto a convertir en minuscula");
    alert ("el texto en minuscula: "+ texto.toLowerCase()+ "\n"+ 
        "el texto en mayuscula: "+texto.toUpperCase());
}
//Solicitar al usuario que ingrese una palabra y mostrar con qué letra comienza.
function primerLetra(){
    let texto = prompt("ingrese la palabra");
    alert ("La palabra comienza con la letra: " + texto[0]) ;

}
//Solicitar al usuario que ingrese una frase y mostrar cuántos caracteres tiene.
function totalLetras(){
    let texto = prompt("ingrese el texto").length
    alert("tiene "+texto+ " caracteres")
}
//Solicitar a un usuario que ingrese un número y devolver cuántos dígitos tiene.
function digitos(){
    let texto = prompt ("ingrese un numero ").length
    alert(texto)
}





/*

Solicitar al usuario que ingrese una palabra y mostrar con qué letra termina.
Ingresar una cadena de texto y reemplazar los espacios por asteriscos.
Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.
Solicitar un texto y mostrarlo todo menos la primera letra.
Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera letra mayúscula.
 */


// BONUS EJERCICIO 1
//Solicitar al usuario su clave de 4 dígitos (que tendremos almacenada en una variable) y el monto a retirar. Si la clave es correcta y el monto mayor al balance, realizar la operación. Sino, mostrar un mensaje de error en caso de ser la clave incorrecta o pedir más dinero del disponible.
function home() {

    // BONUS EJERCICIO 1
        let clave = 1234;
        let montoRetirar;
        let balance = 100000;
        pin = parseInt(prompt('Ingrese su clave'));
        montoRetirar = parseInt(prompt('Ingrese el monto a retirar'));
        if (clave === pin) {
            if (montoRetirar > balance) {
                alert("usted no cuenta con el dinero ingresado")
            }
            else {
                
                alert('Operacion realizada con exito ');
            }
    
        } else {
            alert("Contraseña incorrecta ");
        }
    }

function homeBanking(){
    let user1= "jorge10";
    let clave1= "1234"
    let usuario = prompt("Ingrese su usuario")
    let clave = prompt("ingrese su contraseña")
    let saldo = 10000
    if (usuario === user1  && clave === clave1) {
        let option =prompt("Elija la opcion:" +"\n"+
        "1_ Ver saldo actua \n "+
        "2_ Retirar dinero \n "+
        "3_Depositar dinero en su cuenta\n"+
        "4_Cambiar su clave")
        if (option === "1") {
            alert ("su saldo actual es: "+saldo)
        }
        else if(option === "2"){
            let retirar = parseInt(prompt("ingrese el dinero q dea retirar"));
            if (saldo >= retirar) {
                saldo -= retirar;
                alert("su nuevo saldo es :"+saldo)
            } else {
                alert("el monto ingresado supera a su saldo")
            }

        }
        else if (option === "3") {
            saldo += parseInt(prompt("Ingrese el monto que desea depositar"))
            alert ("su deposito esta hecho "+ saldo)
            }
        else if (option === "4") {
            clave = prompt("ingrese su nueva clave")
            alert("su clave fue cambiada exitosamente")
        }
        else {
            alert("la opcion ingresada es invalida")
        }    
    }else {
        alert("la clave o usuario es incorrecto")
    }
   

}