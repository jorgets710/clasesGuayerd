//1_Mostrar los primeros 10 números naturales. (1,2,3,4,5,6,7,8,9,10).
function numerosNaturales() {
    for (let index = 1; index <= 10; index++) {
        alert("numeros naturales" + index)

    }
}
//2_Solicitar al usuario que ingrese 5 números y mostrar la suma de ellos.
function cincoNumeros() {
    let suma = 0;
    for (let index = 0; index < 5; index++) {
        suma += parseInt(prompt("ingrese un numero"))
    }
    alert(suma)
}
//3_Solicitar al usuario que indique cuántos números quiere ingresar y mostrar el resultado de la suma de ellos
function nNumeros() {
    let n = parseInt(prompt("ingrese la cantidad de numeros que quiere ingresar"));
    let suma = 0;
    for (let index = 0; index < n; index++) {
        suma += parseInt(prompt("ingrese un numero"))
    }
    alert(suma)
}
//4_Solicitar al usuario que ingrese números hasta que desee y luego mostrar la suma de ellos.
function xNumero(params) {
    let activo = true;
    let total = 0;
    while (activo == true) {
        total += parseInt(prompt("ingrese un numero"));
        activo = confirm("quiere seguir sumando otro numero?;")
    }
    alert(total)
}
//5_Solicitar al usuario que ingrese tantos números como desee y luego mostrar el promedio de ellos.
function promedio(params) {
    let activo = true;
    let suma = 0;
    let cont = 0;
    while (activo == true) {
        let numero = parseInt(prompt("ingrese un numero del 1 al 10"))
        if (numero <= 10 && numero >= 1) {
            suma += numero;
            activo = confirm("quiere seguir sumando numeros")
            cont++;
        } else {
            alert("ingreso un numero no permitido")
        }
    }
    alert("su promedio es: " + (suma / cont))
}
//6_Realizar un programa que pida al usuario un número y muestre los números del 1 al número introducido. 
function numerosX(params) {
    let num = parseInt(prompt("ingrese el numero"))
    for (let index = 1; index <= num; index++) {
        alert(index)
    }
}
//7_Realizar un programa que pida al usuario dos números y muestre los números del primer número al segundo. (Ejemplo: 5 y 9: 6,7,8) Aceptar solo enteros. 
function entreNumeros(params) {

    let num = parseInt(prompt("Ingrese el primer numero"));
    let num2 = parseInt(prompt("ingrese el segundo numero"));
    let numeros = "";
    if (num < num2) {
        for (let index = num; index < (num2 - 1); index++) {
            numeros += (index + 1) + ","
        }
        alert(numeros)
    } else {
        for (let index = num2; index < (num - 1); index++) {
            numeros += (index + 1) + ","
        }
        alert(numeros)
    }
}

//8_Preguntar al usuario cuántos números quiere ingresar. Luego solicitar que los ingrese uno por uno y mostrar cuál es el mayor.
function esMayor(params) {
    let esMayor = 0;
    let cantNumeros = parseInt(prompt("ingrese la cantidad de numeros qu quiere ingresar"));
    for (let index = 0; index < cantNumeros; index++) {
        let numeros = parseInt(prompt("ingrese el numero"))
        if (esMayor < numeros) {
            esMayor = numeros;
        }
    }
    alert("es mayor el numero " + esMayor)
}
//9_Solicitar al usuario que ingrese la cantidad de números que quiera, uno por uno, y mostrar cual es el menor de todos.
function esMenor(params) {
    let cantNumeros = parseInt(prompt("ingrese la cantidad de numeros que quiere ingresar"));
    let esMenor = cantNumeros;
    for (let index = 0; index < cantNumeros; index++) {
        let num = parseInt(prompt("ingrese el primer numero "))
        if (esMenor > num) {
            esMenor = num;
        }
    }
    alert("el numero menor es: " + esMenor)
}
function esMenor2() {

    let seguir;
    let numero = parseInt(prompt("ingrese el numero"));
    let esMenor = numero;
    do {
        if (esMenor > numero) {
            esMenor = numero;
        }
        seguir = confirm("quiere seguir ingresando numeros");
        if (seguir) {
            numero = parseInt(prompt("ingrese el numero"));
        }
    } while (seguir);
    alert(esMenor)

}
//10_Solicitar al usuario que ingrese un número y mostrar, en una sola cadena de string, la cantidad de asteriscos qué indique en el número. (Ejemplo: 5, “*****”.)
function asterisco(params) {
    let num = parseInt(prompt("ingrese el numero de asteriscos q quiere ver"));
    let texto = "";
    for (let index = 0; index < num; index++) {
        texto += "*"

    }
    alert(texto)
}
//11_Realizar un programa que pida la base y el exponente y calcule la potencia.
function potencia(params) {
    let base = parseInt(prompt("ingrese la base"));
    let exponente = parseInt(prompt("ingrese el exponente"))
    let total = 1;
    for (let index = 0; index < exponente; index++) {
        total = total * base;
    }
    alert(total)
}
//12_Realizar un programa que pida un número y calcule su factorial.  (Ejemplo de factorial: 5! Factorial de 5 es 5*4*3*2*1 )
function factorial(params) {
    let num = prompt("ingrese el numero para factorizar");
    texto = "";
    num = parseInt(num)
    do {
        texto += num + "*"
        num--;
    } while (num != 0);
    alert(texto.slice(0, -1)); // me quita el ultimo caracter q seria *
}
//13_Realizar un programa que pida un número y diga todos sus divisores. (Se verifica que un número es divisor del otro cuando el resto de dividir por ese número es 0.)
function divisores(params) {
    let num = parseInt(prompt("ingrese un numero para saber sus divisores"))
    let divisor = "";
    for (let index = 0; index <= num; index++) {
        if (num % index == 0) {
            divisor += index + " ,"
        }
    }
    alert("sus divisores son " + divisor.slice(0, -1))
}
/*14_Solicitar al usuario que ingrese un número y una cadena de caracteres. Mostrar por consola la cantidad de caracteres se hayan solicitado. (Ejemplo: “Hola Guayerd” , 4), debe mostrar:
H
O
L
A*/
function cadena(params) {
    let texto = prompt("ingrese una cadena de texto");
    let cant = parseInt(prompt("ingrese la cantidad de caracteres q desea ver"));

    alert(texto.slice(0, cant))
}
function cadenaDos(params) {
    let texto = prompt("ingrese una cadena de texto");
    let cant = parseInt(prompt("ingrese la cantidad de caracteres q desea ver"));
    let textoDos = "";
    for (let index = 0; index < cant; index++) {
        textoDos += texto[index] + "\n";
    }
    alert(textoDos.toUpperCase())
}
//15_Solicitar al usuario que ingrese una lista de supermercado y al final mostrar todos los items separados por comas.
function superMercado() {
    let notaCompra = "";
    activo = true;
    while (activo == true) {
        let lista = prompt("ingrese el producto \n Escriba 'terminar' para finalizar la lista");
        if (lista == "terminar") {
            activo = false;
        } else {
            notaCompra += " " + lista + ","
        }
    }
    alert(notaCompra.slice(0, -1))
}
//16_Solicitar al usuario que ingrese números. Finalizar cuando ingrese un número múltiplo de 3. Mostrar todos los números ingresados.
function multiplos() {
    alert("para finalizar el programa ingrese un multiplo de 3")
    let sumaNumeros = "";
    let numero;
    do {
        numero = parseInt(prompt("ingrese el numero"));
        sumaNumeros += numero + ","

    } while (numero % 3 != 0);
    alert("usted ingreso todos estos numero " + sumaNumeros.slice(0, -1))
}
/*Bonus desafíos matemáticos !!
1_Agregar al ejercicio 5 una validación de que solo se acepte números del 1 al 10. Si ingresa un número no válido, volver a solicitar el dato.
2_Realizar un programa que pida números consecutivos (3, 4 y 5; 9, 10 y 11, etc.). Cuando se introducen tres números consecutivos dice “gracias” y termina. Mientras no se introduzcan tres números consecutivos el programa sigue pidiendo números indefinidamente.
*/
function consecutivo() {
    alert("si ingresa 3 numeros consecutivos termina el juego")

    let cont = 0;
    let num1 = 0;
    let numero;
    do {
        numero = parseInt(prompt("ingrese un numero"))
        if (numero == (num1 + 1)) {
            cont++
            num1 = numero;
        } else {
            num1 = numero;
            cont = 0;
        }
    } while (cont != 2);
    alert("gracias! termino el juego")
}
/*3_Realizar un programa que pida dos números y diga su máximo común divisor.
(notas sobre el Máximo Común Divisor:
- Es el máximo número por el cuál se puede dividir un número dejando resto 0.
- No puede ser mayor al valor de la mitad del menor número o sí mismo.
 (Ejemplo: Si mis números son 9 y 12, no puede estar entre 5 y 8, ni ser mayor a 9).
 (Ejemplo: Si mis números son 10 y 15, no puede estar entre 6 y 9, ni ser mayor a 10). (Podemos probar: 1,2,3,4,10).*/
function maximoDivisor() {
    let divisor1 = parseInt(prompt("ingrese el primer numero"));
    let divisor2 = parseInt(prompt("ingrese el numero"));
    let mcd = 0;
    for (let index = 0; index < divisor1; index++) {
        if (divisor1 % index == 0 && divisor2 % index == 0) {
            mcd = index
        }
    }
    alert(mcd)
}
/*4_Solicitar al usuario que ingrese números. Mostrar los primeros tres multiplicados por 1, luego los próximos tres multiplicados por 2 y así sucesivamente. Cortar cuando el usuario ingrese un número mayor a 100. En cada iteración se debe mostrar la salida. Ejemplo:
Ingresa 1 > muestra 1
Ingresa 8 > muestra 8
Ingresa 3 > Muestra 3
ingresa 4 > Muestra 8
Ingresa 9 > Muestra 18
Ingresa 50 > Muestra 100
Ingresa 7 > Muestra 21
ingresa 10 > Muestra 30

 */
function multiplicar() {
    let numero;
    let cont = 0;
    let multica = 1;
    while (numero = parseInt(prompt("ingrese un numero")) <= 100) {

        cont++;
        numero *= multica;
        alert(numero)
        if (cont % 3 == 0) {
            multica++;
        }

    }
}
//5_Solicitar al usuario que ingrese 10 números, calcular el factorial de cada uno de ellos  y mostrarlo.
function factorialMasivo() {
    alert("ingrese 10 numeros")  
    let texto =""; 
    for (let index = 0; index < 10; index++) {
        let total = 1;
        let numero = parseInt(prompt("ingrese el numero "));
        for (let index = 0; index < numero; index++) {
            total *= (index + 1);
        }
        alert(+total);
        texto += "el factorial de "+numero+" es "+ total +"\n";
    }
    alert (texto);
}
//6_Solicitar al usuario que ingrese un número y mostrar esa cantidad de dígitos de la secuencia de Fibonacci.

    

function fibonacci (params) {
    let iteraciones = parseInt(prompt("ingrese un numero para ver la secuencia Fibonacci"))
    let total=0;
    let num1 = 0;
    let num2=1
    
    for (let index = 0; index < iteraciones ; index++) {
        total= num1+num2;
        num1 = num2;
        num2 = total;       
        alert (total)
    }

}


