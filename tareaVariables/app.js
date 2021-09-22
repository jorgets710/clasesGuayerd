function Usuario() {
    let usuario;
    let apellido;
    usuario = window.prompt("ingrese su nombre")
    console.log("hola " + usuario);
    alert("hola " + usuario);
    apellido = window.prompt("ingrese su apellido");
    console.log("saludos " + apellido);
    alert("saludos " + usuario + " " + apellido);
}
function suma() {
    let num1 = window.prompt("ingrese el primer numero");
    let num2 = window.prompt("ingrese el segundo numero");
    let resultado = parseInt(num1) + parseInt(num2);
    alert("el resultado es " + resultado)
}

function Cumpleaños() {
    let edad = window.prompt("Ingrese su edad si ya cumplio este año , si aun no cumplio ingrese cuantos años cumple");
    alert("año de nacimiento " + (2021 - edad));
}
//3) Mostrar al usuario su balance de cuenta (Numero asignado por nosotros). Consultar cuánto dinero desea retirar y mostrar el nuevo balance.
function Balance() {
    let total = 10000;
    let consulta = window.prompt("su saldo es de " + total + " ingrese cuando dinero desea retirar");
    total -= parseInt(consulta);
    alert("su nuevo saldo es " + total)
}
//4) Solicitar al usuario 3 notas, calcular el promedio y mostrarlo por consola
function Promedio() {
    var nota1 = window.prompt("Ingrese la primer nota");
    var nota2 = window.prompt("Ingrese la segunda nota ");
    var nota3 = window.prompt("Ingrese la tercer nota ");
    var total = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;
    alert("su promedio es " + total)
}
//5) Crear un conversor de medidas. Pedirle al usuario que ingrese una medida en metros y pasarlo a pies, centimetros y pulgadas. Mostrar por consola los tres resultados.
function Conversor() {
    let medida = parseInt(window.prompt("ingrese la medida en metros"));
    let pies = 3.2808 * medida;
    let centimetro = 100 * medida;
    let pulgadas = 39.37008 * medida;
    alert("resultado en pies" + pies + "centimetros" + centimetro + "pulgadas " + pulgadas)
}
//6) Solicitar al usuario dos números y mostrar el resultado de la suma. Luego solicitar al usuario un tercer número y multiplicarlo por el resultado anterior. Mostrar el resultado final.
function Calculo() {
    let num1 = parseInt(window.prompt("ingrese un num"));
    let num2 = parseInt(window.prompt("ingrese un num"));
    let total = num1 + num2;
    alert(total)
    let num3 = parseInt(window.prompt("ingrese un num"));
    alert(total *= num3);
}
//7) Armar un conversor de minutos a segundos. Solicitar al usuario un número de minutos y mostrar por alert la cantidad de segundos a la que equivale.
function conversorSegundos() {
    let num = parseInt(window.prompt("ingrese los min"));
    alert("los minutos ingresados equivalen a " + 60 * num);
}
//8) Solicitar al usuario la medida de la base y de la altura de un rectángulo y devolver el área.
function Area() {
    let base = parseInt(window.prompt("ingrese el base"));
    let altura = parseInt(window.prompt("ingrese la altura"));
    alert("el area del rectangulo " + base * altura);
}
//9) Solicitar al usuario la medida de la base y de la altura de un triángulo equilatero y devolver el área.
function areaEquilatero() {
    let base = parseInt(window.prompt("ingrese el base"));
    let altura = parseInt(window.prompt("ingrese la altura"));
    alert("el area del rectangulo " + (base * altura) / 2);
}
//10) Solicitar al usuario un monto y un número de descuento. Mostrar al usuario cuánto es el precio final con el descuento aplicado.
function descuento() {
    let monto = parseInt(window.prompt("ingrese un monto"));
    let descuento = parseInt(window.prompt("ingrese el % del descuento"))
    let total = monto - ((monto * descuento) / 100)
    alert("el total a pagar es " + total);
}
//11) Solicitar al usuario su nombre y la edad que cumple o cumplió en 2021, y mostrar un mensaje con alert diciendo "Hola (nombre) usted nació en el año (año)"
function saludo() {
    let nombre = window.prompt("ingrese su nombre");
    let edad = parseInt(window.prompt("ingrese su edad que cumple o cumplio en 2021 "))
    alert("hola " + nombre + " usted nacio en año " + (2021 - edad))
}
//12) Crear un conversor de Celsius a Farenheit. Solicitar al usuario su nombre y una temperatura y mostrar por consola su equivalente en Farenheit junto con un mensaje que incluya ambos datos. 
function temperatura() {
    let nombre = window.prompt("ingrese su nombre");
    let temp = parseInt(window.prompt("ingrese su temperatura celsius"));
    let conver = (temp * 9 / 5) + 32;

    alert("hola " + nombre + "los celsios ingresados " + temp + " son farenheit " + conver);
}
// 13) Realizar el mismo ejercicio que el anterior pero al revés, de Farenheit a Celsius.
function Farenheit() {
    let nombre = window.prompt("ingrese su nombre");
    let temp = parseInt(window.prompt("ingrese su temperatura celsius"));
    let conver = (temp - 32) * 5 / 9
    alert("hola " + nombre + "los farenheit ingresados " + temp + "  son celsios " + conver);
}
//14) Solicitar al usuario un número y almacenarlo en una variable. Sumarle 5 , multiplicar el resultado por 10 y sacar el resto de su división por 3. Mostrar el resultado sin comas.
function resto() {
    let num = parseInt(window.prompt("ingrese un numero "));
    let total = ((num + 5) * 10) % 3;
    let total1 = ((num + 5) * 10) / 3;
    let total2 = Math.trunc(((num + 5) * 10) / 3);
    alert(total + "res de la div " + total1 + "total sin decimales " + total2)
}

//0) Solicitar dos números y mostrar la suma de sus cifras. (Ejemplo: 15 y 29, mostrar 1529)
function concatenar() {
    let num1 = prompt("ingrese un numero ");
    let num2 = prompt("ingrese el segundo numero");
    alert(num1 + num2)
}
//1) Crear un conversor de años a segundos. Solicitar al usuario una cantidad de días y mostrar su equivalente en segundos por consola o alert, a elección. (Pueden probar también con números con coma :) 2,5 años por ejemplo)

function conversorAños(){
    let años =parseInt(prompt("Ingrese los años que quiere saber en segundos"))
    let dias =parseInt(prompt("Ingrese los dias que quiere convertir en segundos"))
    alert("los años a segundos son: "+ años * 31536000)
    alert("los dias en segundos son: "+ dias * 86400)
}

//2) Solicitar al usuario que ingrese la cantidad de kilómetros que desea recorrer con su motocicleta. A continuación solicitar la velocidad promedio a la que desea ir en kilómetros por hora. Calcular el tiempo estimado en llegar a destino en minutos.  A tener en cuenta: la velocidad se calcula en metros sobre segundos!)
function velocidad (){
    let kilómetros= parseInt(prompt("Ingrese la cantidad de kilometros a recorrer "));
    let velocidad= parseInt(prompt("ingrese la velocidad que desea a ir en kilometros/hora"));
    let min ;
    min = (kilómetros / velocidad)*60
    alert ("usted tardara "+min+ "min")
}
/*3) Realizar una calculadora de sueldo neto. Se solicita ingresar el sueldo bruto y se descuenta: Obra social 3%, jubilación 11%, Ley 19032 3%. Mostrar el monto de cada una de las deducciones y el monto final. No contempla impuesto a las ganancias ni sindicatos.
ej: Sueldo bruto: $70.000
    Deducciones:
    Obra social: $2100
    Ley 19032: $2100
   Jubilación: $7700
   Neto a pagar: $58100*/

function sueldoNeto (){
    let sueldo = parseInt(prompt("ingrese su sueldo, para hacer los descuentos"));
    let obraSocial= (sueldo*3)/100;
    let jubilacion= (sueldo* 11)/100;
    let ley = (sueldo*3)/100;
    netoPagar= sueldo -obraSocial-jubilacion-ley;
    alert("su sueldo bruto :" + sueldo +" \n "+
           "    descuentos : "+  "\n"+
                "           obra social: " + obraSocial  +  "\n"+           
                "           jubilacion: " + jubilacion +  "\n"+
                "           Ley 19032: " + ley +  "\n"+
            "neto a pagar: "+netoPagar);
}




