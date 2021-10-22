/**
 * const x = (x, y) => {
    alert(x * y)
};
 */
// 1 _ Crear una función que reciba tu edad y retorne tu edad en años perro. (Multiplicado por 7).

const añosPerro = () => 
{
    let edad =parseInt( prompt("ingrese su edad"));
    let edadPerros= 7;
     alert(edad*edadPerros)
};
//2_Crear una función que reciba un nombre y devuelva un saludo.
const saludo = (a) =>
{
    alert(a+" hola")
}




//ejercio 6
/*function kiosko (){
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
}*/ 
/*function validarEdad (edad) {
   
   if (edad > 18) {
      return ("es mayor");
   }
}
let hola =validarEdad(19)
alert(hola)*/