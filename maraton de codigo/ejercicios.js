//1_Pedir nombre al usuario y saludarlo. Pasar el texto a Mayúsculas y a Minúsculas. Mostrar ambos en pantalla.
function saludo(params) {
    let nombre = prompt("ingrese su nombre para el saludo!");
    let texto = ("hola " + nombre);
    alert("hola " + nombre);
    alert("en minuscula: " + texto.toLowerCase() + "\n"
        + " en mayuscula: " + texto.toUpperCase());

}
//2_Pedir al usuario dos números y mostrar la suma y resta de ellos. Para la resta, restar siempre al más grande el más chico.
function sumaResta(params) {
    let numero1 = parseInt(prompt("ingrese un numero"));
    let numero2 = parseInt(prompt("ingrese otro numero"));
    let resta;
    let suma = numero1 + numero2;
    if (numero1 > numero2) {
        resta = numero1 - numero2;
    } else {
        resta = numero2 - numero1;
    }
    alert("la suma de ambos numeros es: " + suma + "\n" +
        "la resta de ambos numeros es: " + resta);
}
//3_Ingresar un texto. Preguntar si quiere ver el resultado en pantalla (alert) o consola (console.log). Pasar el texto a MAYUSCULA y mostrar donde corresponda.
function textoMayuscula(params) {
    let texto = prompt("ingrese un texto")
    let confirma = confirm("si desea ver el resultado por pantalla aceptar , por consola cancelar")
    if (confirma == true) {
        alert(texto.toUpperCase());
    } else {
        console.log(texto.toUpperCase());
    }
}
//4_Calculadora. Pedir ingresar dos números. Luego ingresar una operación (SUMA/RESTA/MULTI/DIV/POTENCIA). Realizar la operación y mostrar el resultado en pantalla.
function calculadora(params) {
    let num1 = parseInt(prompt("ingrese un numero"));
    let num2 = parseInt(prompt("ingrese otro numero"));
    let operador = prompt("ingrese un operador: +,-,/,* y p(potencia) ")
    switch (operador) {
        case "+":
            alert(num1 + num2);
            break;
        case "-":
            alert(num1 - num2)
            break;
        case "/":
            alert(num1 / num2)
            break;
        case "*":
            alert(num1 * num2);
            break;
        case "p":
            alert(Math.pow(num1, num2))
            break;
        default:
            break;
    }
}
/*5_ Vamos reutilizar la calculadora del punto 4. Pero esta vez, luego de mostrar el resultado, vamos a preguntar al usuario si desea hacer otra operación o terminar. Si quiere seguir operando, volvemos a pedir valores, operación y mostrar resultado HASTA que nos diga que no quiere continuar.
Extra: investigar/googlear la función de Javascript "confirm"*/
function bucle(params) {

    do {
        calculadora();
        var seguir = confirm("quiere seguir usando la calculadora aceptar de lo contrario cancel")
    } while (seguir == true);
}
//6_Agregar alumnos/as a un curso. Vamos a pedirle al usuario que ingrese nombres de alumnos/as para el nuevo curso. Continuar guardando nombres HASTA que el usuario ingrese SALIR. Mostrar todos los nombres en pantalla.
function aula(params) {
    const alumnos = ["alumno1", "alumno2", "alumno3", "alumno4", "alumno5", "alumno6", "alumno7"];
    let ingresar;
    do {
        ingresar = prompt("ingrese un alumno nuevo, para finalizar escriba 'salir'")
        if (ingresar != "salir") {
            alumnos.push(ingresar);
        }
    } while (ingresar != "salir");
    alert(alumnos)
}
/*7_Dado el siguiente array de nombres, recorrerlo y mostrar en pantalla: Indice (posición) y Nombre con la primera letra en mayúscula.

const ej7Nombres = ["goku","mario","melchor","mafalda","cacho","hermione","tony","pappo","leia",”homero”];*/
function dibujitos(params) {
    const nombres = ["goku", "mario", "melchor", "mafalda", "cacho", "hermione", "tony", "pappo", "leia", "homero"]
    for (let index = 0; index < nombres.length; index++) {
        nombres[index] = nombres[index].charAt(0).toUpperCase() + nombres[index].slice(1);
        alert("en la posicion " + index + " esta el nombre de " + nombres[index]);
    }
}
/*8_ Para una veterianaria. Dado el siguiente array de nombres de mascotas completar el código con las  siguentes reglas de negocio:
- Si el nombre tiene más de 6 caracteres, informar: "Nombre largo"
- Si tiene menos o es igual a 3 caracteres, informar: "Nombre corto"
- Si es igual a "Fido" o "Gertrudis", informar: "Hay que vacunar contra la rabia"
- Si es igual a "Tuerca", informar: "Entregar alimento balanceado"
const ej8Mascotas = ["Tuerca","Ramshanaram","Perro","Gertrudis","Kat","Fido","Lo","Loko","MAX"];*/
function veterinaria(params) {
    const mascotas = ["Tuerca", "Ramshanaram", "Perro", "Gertrudis", "Kat", "Fido", "Lo", "Loko", "MAX"];

    for (let index = 0; index < mascotas.length; index++) {
        if (mascotas[index].length > 6) {
            alert("Nombre largo: " + mascotas[index])
        } else if (mascotas[index].length <= 3) {
            alert("Nombre corto: " + mascotas[index])
        }
        if (mascotas[index] == "Fido" || mascotas[index] == "Gertrudis") {
            alert("Hay que vacunar contra la rabia " + mascotas[index])
        } else if (mascotas[index] == "Tuerca") {
            alert("Entregar alimento balanceado: " + mascotas[index])
        }

    }
}
/*9_Un restaurant desea mejorar su sistema de reserva para mostrar a los clientes un aproximado de costos.
- Cada menor de edad pagará el menú $450 y cada adulto, $700.
- Si el grupo tiene más de 4 adultos, se hará un 10% al total de la factura.
Mostrar por pantalla la cantidad de comensales y el costo total a pagar.
const ej9restaurant = [25,17,18,44,12,9,36,50]*/
function restaurante(params) {
    //edades de los comensales
    const edadesGrupoFamiliar = [25, 17, 18, 44, 12, 9, 36];
    let montoMenor = 450;
    let montoAdulto = 700;
    let desc = 10;
    let total = 0;
    let cantAdultos = 0;
    let comensales = edadesGrupoFamiliar.length;
    console.log(comensales);
    for (let index = 0; index < comensales; index++) {
        if (edadesGrupoFamiliar[index] >= 18) {
            total += montoAdulto;
            cantAdultos++
        } else {
            total += montoMenor
        }
    }
    if (cantAdultos > 4) {
        total = total - (total * desc / 100)
    }
    alert("la cantidad de comensales es: " + comensales + "\n" +
        "el total a pagar es: $" + total)


}
/*10_De un consultorio médico nos piden automatizar el proceso de recepción de los pacientes.
  Para ello:
  - Ingresar código de paciente (Number XXX, 3 dígitos de 1 a 999).
  - Si el código ingresado esta entre 1 y 99, es un paciente VIP.
    - Preguntarles "Como valoran la calidad del servicio? (1..10)". Guardar el resultado ingresado.
    - Agregar el código de paciente adelante en la cola (array) de turnos
  - Si el código ingresado esta entre 100 y 500, es un paciente de prepaga.
    - Agregar el código de paciente al final de la cola (array) de turnos
  - Si el código ingresado esta entre 501 y 999, es un paciente nuevo.
    - Preguntarles "Desea pasarse a VIP?". Si la respuesta es afirmativa, guardar el código de paciente.
    - Agregar el código de paciente al final de la cola (array) de turnos

  - Si todos los pacientes fueron ingresados, informar en pantalla:
    - Calidad del servicio VIP. Informar valor promedio, valor máximo y valor mínimo.
    - Ingreso al consultorio: Mostrar en pantalla el orden de ingreso x código de paciente.
    - Pasarse a VIP: Mostrar en pantalla todos los códigos de pacientes que desean ser VIP

  - Nota: Escribir código con funciones para facilitar su lectura.
 */
function consultorioMedico(params) {
    const turnos = [];
    const calificacion = [];
    const pasaraVip = [];
    let codigo;
    do {
        codigo = parseInt(prompt("ingrese el codigo de paciente del 1 a 999 y 1000 para terminar"));
        let tipoPaciente = clasificacionServicio(codigo);
        if (tipoPaciente == "vip") {
            let calidadServicio = parseInt(prompt("Como valoran la calidad del servicio? (1..10)"));
            calificacion.push(calidadServicio);
            turnos.unshift(codigo)
        } else if (tipoPaciente == "prepaga") {
            turnos.push(codigo)
        } else if (tipoPaciente == "nuevo") {
            let cambiar = confirm("Desea pasarse a VIP?");
            if (cambiar == true) {
                pasaraVip.push(codigo)
            }
            turnos.push(codigo)
        }
    } while (codigo != 1000);
    
    alert("todos los pacientes fueron ingresados")
    alert("Calidad del servicio VIP. Informe promedio " + promedio(calificacion) + "\n" +
        "valor máximo" + arrayMax(calificacion) + "\n" +
        "valor mínimo " + arrayMin(calificacion));
    alert("ingreso de pacientes por codigo " + turnos)
    alert("códigos de pacientes que desean ser VIP: " + pasaraVip)
}

function arrayMin(arr) {
    return Math.min.apply(null, arr)
}

function arrayMax(arr) {
    return Math.max.apply(null, arr)
}

function clasificacionServicio(codigo) {
    if (codigo < 100) {
        return "vip"
    } else if (codigo >= 100 && codigo <= 500) {
        return "prepaga"
    } else if (codigo > 500 && codigo <= 999) {
        return "nuevo";

    }
}

function promedio(calificacion) {

    let divisor = calificacion.length;
    let suma= 0;
    for (let index = 0; index < calificacion.length; index++) {
        suma+=calificacion[index]  
    }
    let promedio = suma /divisor;
    return promedio;
}