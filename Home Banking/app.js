var saldo = 10000
var user1= "jorge10";
var clave1= "1234"

function pantalla (){
    
    var usuario = prompt("Ingrese su usuario")
    var clave = prompt("ingrese su contraseña")
    
    if (usuario === user1  && clave === clave1){
        
        window.location.replace('./menu.html')
    }else{
        alert("usuario o clave incorrecto")
    }
}
function saldoActual(){
    alert(saldo)
}
function extraccion(){
    let retirar = parseInt(prompt("ingrese el monto que desea retirar"));
    if (saldo >= retirar) {
        saldo -= retirar;
        alert("su operacion se realizo con exito\n" +"su nuevo saldo es: "+saldo )
    } else {
        alert("el monto ingresado supera a su saldo")
    }

}
function depositar (){
    saldo += parseInt(prompt("Ingrese el monto que desea depositar"))
            alert ("su deposito fue un exito "+ saldo)
}
function cambiarClave (){
    clave1 = prompt("ingrese su nueva clave")
            alert("su clave fue cambiada exitosamente")
}
function cerrarSesion(){
    
    if (confirm ("seguro que desea cerrar sesion")){
        window.location.replace('./indext.html')
    }else {
        
    }
}