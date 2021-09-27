//1 Solicitar al usuario que ingrese un texto y validar si contiene la letra “a”.
function validarA() {
    let texto;
    texto = prompt('Ingrese un texto');
    if (texto.includes("a") == true || texto.includes("A")) {
        alert("Contiene la letra A");
    } else {
        alert("No contiene la letra A");
    }
}
//2 Solicitar al usuario que ingrese un texto y mostrarlo todo en minúsculas y todo en mayúsculas.
function minuscula() {
    let texto = prompt("ingrese el texto a convertir en minuscula");
    alert("el texto en minuscula: " + texto.toLowerCase() + "\n" +
        "el texto en mayuscula: " + texto.toUpperCase());
}
//3 Solicitar al usuario que ingrese una palabra y mostrar con qué letra comienza.
function primerLetra() {
    let texto = prompt("ingrese la palabra");
    alert("La palabra comienza con la letra: " + texto[0]);

}
//4 Solicitar al usuario que ingrese una frase y mostrar cuántos caracteres tiene.
function totalLetras() {
    let texto = prompt("ingrese el texto").length
    alert("tiene " + texto + " caracteres")
}
//5 Solicitar a un usuario que ingrese un número y devolver cuántos dígitos tiene.

function digitos() {
    let texto = prompt("ingrese un numero ").length
    alert(texto)
}
//6 Solicitar al usuario que ingrese una palabra y mostrar con qué letra termina.

function ultimaLetra() {
    let texto = prompt("ingrese un texto ")
    alert(texto[texto.length - 1])
}
// 7 Ingresar una cadena de texto y reemplazar los espacios por asteriscos.
function asteriscos() {
    let texto = prompt("ingrese el texto")
    alert(texto.replace(' ', '*'))
}

// 8_Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.

function buscadorLetra() {
    let letra = prompt("ingrase la letra que quiera buscar");
    let texto = prompt("ingrese el texto a analizar")
    if (texto.includes(letra) == true || texto.includes(letra.toUpperCase()) == true) {
        alert("si contiene la letra ingresada")
    } else {
        alert("no contiene la letra")
    }
}
//9 Solicitar un texto y mostrarlo todo menos la primera letra.
function borrarPrimer() {
    let texto = prompt("ingrese el texto")
    alert(texto.substr(1))
}

//10Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera letra mayúscula.
function mayusculaPrimer() {
    let nombre = prompt("ingrese su nombre")

    alert("su nombre es: " + nombre.charAt(0).toUpperCase() + nombre.slice(1))
}
// 1_Agregar al ejercicio 5 de Variables un validador de datos. Si ingresa un número entonces que me //calcule las medidas, sino, que muestre un mensaje de error

// 2_Solicitar al usuario su edad. Si es menor de 18, decir que es menor de edad, sino decir que es mayor 
function edad() {
    let edad = parseInt(prompt("ingrese su edad"))
    if (edad < 18) {
        alert("es menor de edad")
    } else {
        alert("es mayor de edad")
    }
}
//3_Contexto: Una heladería. Solicitar al usuario sus sabores en un solo input. Luego preguntar si quiere cobertura de chocolate. Si dice Sí, mostrar el valor del helado 180 con el pedido completo: “Su helado sabor …. con cobertura de chocolate cuesta $180”. En caso de que no la requiera, será lo mismo pero sin cobertura de chocolate y el valor es de $150.

function heladeria() {
    let sabor = prompt("ingrese sus sabores ")
    if (confirm("desea cobertura de chocolate") === true) {
        alert("su helado sabor " + sabor + " con cobertura de chocolate cuesta :$180")
    } else {
        alert("su helado sabor " + sabor + " cuesta: $150")
    }

}
// 4-Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos. Informar al usuario si el número resultante es par o impar.
function concatenar() {
    let num1 = prompt("ingrese un numero ");
    let num2 = prompt("ingrese el segundo numero");
    let conca = num1 + num2

    if (parseInt(conca) % 2 === 0) {
        alert("el numero es par" + conca)
    } else {
        alert("el numero no es impar " + conca)
    }

}
//5_Solicitar al usuario un número e indicar si es positivo, negativo o cero.
function posNega() {
    let num = parseInt(prompt("ingrese un numero positivo, negativo o cero"))
    if (num === 0) {
        alert("el numero ingresado es cero")
    } else if (num > 0) {
        alert("el numero es positivo")

    } else {
        alert("el numero es negativo")
    }
}
//6_Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique un descuento del 10%. Mostrar el total a pagar.
function descuento() {
    let monto = parseInt(prompt("ingrese el monto para ver si tiene descuento"))
    let des;
    if (monto > 2000) {
        des = (monto * 10) / 100
        alert("usted tiene un descuento del 10% el total a pagar es: " + (monto - des))
    } else {
        alert("no tiene ningun descuento el monto a pagar es: " + monto)
    }
}
//7_Solicitar al usuario que ingrese una cadena de texto y luego un una posición. Indicar si el dígito de esa posición es vocal o no lo es. (Puede ser consonante, espacio, comilla, etc.)
function averiguar() {
    let texto = prompt("ingrese un texto aleatorio");
    let posi = parseInt(prompt("ingrese la posicion del digito q desea saber")) - 1
    if (texto[posi] === "a" || texto[posi] === "e" || texto[posi] === "i" || texto[posi] === "o" || texto[posi] === "u") {
        alert("es una vocal " + texto[posi])
    } else {
        alert(" no es una vocal" + texto[posi])
    }
}
//8_Solicitar al usuario que ingrese una nota del 1 al 10. Si está entre 1 y 3 responder: Aplazado, si está entre 4 y 5 responder: Reprobado , y 6 o más aprobado.
function nota() {
    let nota = parseInt(prompt("Ingrese su nota del 1 al 10"));
    if (nota >= 1 && nota < 4) {
        alert("ested esta aplazado")

    } else if (nota > 3 && nota < 6) {
        alert("usted esta reprobado")

    } else if (nota > 5 && nota <= 10) {
        alert("usted esta aprobado")
    } else {
        alert("ingreso una nota equivocada")
    }
}
//9_Solicitar al usuario dos números e indicar cual es el mayor o si son iguales.
function mayorIgual() {
    let num1 = parseInt(prompt("ingrese el primer numero"));
    let num2 = parseInt(prompt("Ingrese el segundo numero"));
    if (num1 > num2) {
        alert("el numero " + num1 + " es el mayor")
    } else if (num1 == num2) {
        alert("los dos numeros son iguales")
    } else {
        alert("el numero " + num2 + " es el mayor")
    }
}
//10_Solicitar al usuario que indique un mes (del 1 al 12) e indicar si tiene 30 días, 31 días o 28/29 días.
function mesdia(){
    let mes = parseInt(prompt("ingrese un mes del 1 al 12"))
    if (mes == 2) {
        alert("el mes indicado tiene 28 dias y si es año bisiciesto tiene 29 dias")
    }else if (mes == 4, 6, 9, 11){
        alert("el mes indicado tiene 30 dias")
    }
    else if (mes== 1,3,5,7,8,10,12) {
        alert("el mes indicado tiene 31 dias")
    }else{
        alert("el mes ingresado es incorrecto")
    }
}
//11_Solicitar al usuario que ingrese 3 números e indicar cual es el mayor.
function esMayor (){
    let num = parseInt(prompt("ingrese el primer numero"));
    let num2= parseInt(prompt("ingrese el segundo numero"));
    let num3= parseInt(prompt("ingrese el tercer numero"));
    if (num > num2 &&  num>num3) {
        alert ("el numero mayor es "+num)
    }else if (num2 > num3){
        alert ("el numero mayor es "+num2)
    }else{
        alert("el numero mayor es "+num3)
    }
}
/*12Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. 
(Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error).*/
function kiosko (){
    let edad = parseInt (prompt("ingrese su edad"));
    let bebida= prompt("ingrese la bebida deseada 'cerveza,jugo o agua'");
    let cerveza = 50;
    let agua =10
    let jugo = 30
    let paga ;
    if (edad < 18 && bebida == "cerveza") {
        alert ("sos un wachin, anda a comprar leche")
    }else if (bebida == "cerveza") {
        paga= prompt("la cerveza cuesta $"+cerveza+" ingrese con cuanta va a pagar");
        if (cerveza > paga) {
            alert("Amigo no te alcanza la plata")
        }else{
            alert("su vuelto es $"+(paga-cerveza))
        }
    }else if (bebida == "jugo") {
        paga= prompt("el jugo cuesta $"+jugo+" ingrese con cuanta va a pagar");
        if (jugo > paga) {
            alert("Amigo no te alcanza la plata")
        }else{
            alert("su vuelto es $"+(paga-jugo))
        }
    }else if (bebida=="agua") {
        paga= prompt("el agua cuesta $"+agua+" ingrese con cuanta va a pagar");
        if (agua > paga) {
            alert("Amigo no te alcanza la plata")
        }else{
            alert("su vuelto es $"+(paga-agua))
        }
    }else{
        alert("la bebida ingresada es incorrecta")
    }
}

//Solicitar al usuario un número de mes y devolver el nombre. (Ej: Ingreso 4 y me devuelve “Abril”).

function mes() {
    let mes = parseInt(prompt("ingrese el mes del 1 al 12"))
    if (mes == 1) {
        alert("el mes es enero")
    } else if (mes == 2) {
        alert("febrero")
    } else if (mes == 3) {
        alert("marzo")
    } else if (mes == 4) {
        alert("abril")
    } else if (mes == 5) {
        alert("mayo")
    } else if (mes == 6) {
        alert("junio")
    } else if (mes == 7) {
        alert("julio")
    } else if (mes == 8) {
        alert("agosto")
    } else if (mes == 9) {
        alert("septiembre")
    } else if (mes == 10) {
        alert("octubre")
    } else if (mes == 11) {
        alert("noviembre")
    } else if (mes == 12) {
        alert("diciembre")
    } else {
        alert("el mes ingresado es incorrecto")
    }
}

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

// 2_Solicitar al usuario su día y mes de nacimiento e indicar cual es su signo zodiacal.
function zodiaco() {
    let dia = parseInt(prompt("ingrese su dia de nacimiento"))
    let mes = prompt("ingrese su mes de nacimiento")
    if ((dia >= 21 && mes == "marzo") || (dia <= 20 && mes == "abril")) {
        alert("sos de aries")
    } else if ((dia >= 21 && mes == "abril") || (dia <= 20 && mes == "mayo")) {
        alert("sos tauro")
    } else if ((dia >= 21 && mes == "mayo") || (dia <= 21 && mes == "junio")) {
        alert("geminis")
    } else if ((dia >= 22 && mes == "junio") || (dia <= 22 && mes == "julio")) {
        alert("cancer")
    } else if ((dia >= 23 && mes == "julio") || (dia <= 22 && mes == "agosto")) {
        alert("leo")
    } else if ((dia >= 23 && mes == "agosto") || (dia <= 22 && mes == "septiembre")) {
        alert("virgo")
    } else if ((dia >= 23 && mes == "septiembre") || (dia <= 22 && mes == "octubre")) {
        alert("libre")
    } else if ((dia >= 23 && mes == "octubre") || (dia <= 22 && mes == "noviembre")) {
        alert("escorpio")
    } else if ((dia >= 23 && mes == "noviembre") || (dia <= 21 && mes == "diciembre")) {
        alert("sagitario")
    } else if ((dia >= 22 && mes == "diciembre") || (dia <= 20 && mes == "enero")) {
        alert("capricornio")
    } else if ((dia >= 21 && mes == "enero") || (dia <= 18 && mes == "febrero")) {
        alert("acuario")
    } else if ((dia >= 19 && mes == "febrero") || (dia <= 20 && mes == "marzo")) {
        alert("piscis")
    } else {
        alert("el dia o mes ingresado es inval20ido")
    }
}
/*
Solicitar al usuario que ingrese la hora y su nombre. Si son entre las 12 inclusive y 19 saludar con buenas tardes, entre 19 inclusive y 5 buenas noches, y entre 5 inclusive y 12 buenos días.
*/
function saludo() {
    let hora = parseInt(prompt("ingrese la hora"));
    let name = prompt("ingrese su nombre");
    if (hora > 24) {
        alert("la hora ingresa es invalida")
    } else {
        if (hora >= 12 && hora < 19) {
            alert("buenas tardes "+name)
        } else if (hora >= 19 || hora < 5) {
            alert("buenas noches "+name)
        } else if (hora >= 5 && hora < 12) {
            alert("buenos dias "+name)
        }
    }

}

function homeBanking() {
    let user1 = "jorge10";
    let clave1 = "1234"
    let usuario = prompt("Ingrese su usuario")
    let clave = prompt("ingrese su contraseña")
    let saldo = 10000
    if (usuario === user1 && clave === clave1) {
        let option = prompt("Elija la opcion:" + "\n" +
            "1_ Ver saldo actua \n " +
            "2_ Retirar dinero \n " +
            "3_Depositar dinero en su cuenta\n" +
            "4_Cambiar su clave")
        if (option === "1") {
            alert("su saldo actual es: " + saldo)
        }
        else if (option === "2") {
            let retirar = parseInt(prompt("ingrese el dinero q dea retirar"));
            if (saldo >= retirar) {
                saldo -= retirar;
                alert("su nuevo saldo es :" + saldo)
            } else {
                alert("el monto ingresado supera a su saldo")
            }

        }
        else if (option === "3") {
            saldo += parseInt(prompt("Ingrese el monto que desea depositar"))
            alert("su deposito esta hecho " + saldo)
        }
        else if (option === "4") {
            clave = prompt("ingrese su nueva clave")
            alert("su clave fue cambiada exitosamente")
        }
        else {
            alert("la opcion ingresada es invalida")
        }
    } else {
        alert("la clave o usuario es incorrecto")
    }


}