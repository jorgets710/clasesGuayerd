const arrayDonacion= [];
function donaciones(donacion) {   
    arrayDonacion.push(donacion); 
    console.log (arrayDonacion)
    return arrayDonacion;
}


function totalDonaciones() {
    let total=0;
    for (let index = 0; index < arrayDonacion.length; index++) {        
         total+= arrayDonacion[index];      
    }
    console.log("el total de donaciones es: "+total)
}
