/*1_a) Solicitar al usuario que ingrese 5 nombres de frutas y almacenarlos en un array.
b) Ahora, solicitar al usuario que ingrese otros nombres de frutas, la cantidad que desee, sin pedirle de antemano cuál será la cantidad a ingresar.
c) Concatenar ambos arrays y mostrarlo de dos formas diferentes: Con las 5 frutas al principio, y con las 5 frutas al final.*/
function primerArray (){
    const frutas = [];
    const frutas2=[];
    for (let index = 0; index < 5; index++) {
        frutas[index] = prompt ("ingrese una fruta")
        console.log(frutas)
    }

    
    let index=0;
    let finalizar = true;
    alert("ingrese 1 para finalizar")
    do {
        frutas2[index]=prompt("ingrese una fruta nueva")
        if (frutas2[index]==1) {
            finalizar=false;
            
        }else{
          index ++;  
        }
        
    } while (finalizar == true);

    frutasFrutas2= frutas.concat(frutas2);
    console.log(frutasFrutas2.slice(0,-1) )
    
}
//2_Crear un array con 10 nombres de ciudades, y solicitar al usuario que nos diga un número. Mostrar el nombre de la ciudad en esa posición del array.

function  ciudades(params) {
    const ciudades = ["buenos aires", "berlin", "barcelona","tokio","shanghai","cairo","san pablo","los angeles","londres","pekin"]

    let ciudad = (parseInt(prompt("ingrese un numero")))-1;
    alert (ciudades[ciudad])
}
//3_Utilizar el mismo array de ciudades, solicitar al usuario un número y remover esa cantidad de ciudades del array. Mostrar dos opciones: Sacando los datos desde el principio , y desde el final del array.

function ciudades2 (params) {
    const ciudades = ["buenos aires", "berlin", "barcelona","tokio","shanghai","cairo","san pablo","los angeles","londres","pekin"];
    let numero = parseInt(prompt("ingrese un numero para eliminar"));
    let confirmar = confirm("si desea eliminar al princio ingrese aceptar de los contrario cancel");
    if (confirmar == true) {
        for (let index = 0; index < numero; index++) {  
           ciudades.shift() 
        }
    }else{
        for (let index = 0; index < numero; index++) {  
            ciudades.pop() 
         }
    }
    console.log(ciudades)
}
/*4_Crear un array de 8 posiciones con nombres de artistas musicales y mostrar POR SEPARADO:
Su longitud
El último elemento.
Solo las posiciones pares
todos los elementos
todos los elementos menos el último 
Todos los elementos menos el primero
todos los elementos separados por “*”.
Solicitar al usuario un nuevo artista para reemplazar al último ingresado.*/
function artistasMusicales(params) {
    const musicales= new Array ("duky","cazzu","pabo londra","nicki nicole", "tini stoessel","abel pintos","gustavo cerati","miranda");
    console.log(musicales)

    for (let index = 0; index < musicales.length; index++) {
        console.log(musicales[index].length)    
    }
    console.log(musicales[musicales.length-1])
    for (let index = 0; index < musicales.length; index++) {
        if (index%2==0) {
            console.log(musicales[index])
        }   
    }
    console.log(musicales);
    console.log(musicales.slice(0,musicales.length-1));
    console.log(musicales.slice(1,musicales.length));

    for (let index = 0; index < musicales.length; index++) {
        if (index%2!=0) {
            musicales.splice(index,0,"*")         
        }    
    }
    console.log(musicales)
    musicales.splice(musicales.length-1,1, "Dani")
    
    console.log(musicales)   
}
/*5Crear un array de 8 posiciones con números enteros  y mostrar:
 Su longitud
 Solo las posiciones impares.
 Solo los NUMEROS impares.
 El mayor de ellos
 Mostrar la mitad de elementos del array. (Pensar esto como si no supieramos la cantidad de posiciones que tiene.)
  */
 function numeroEnteros(params) {
     const enteros = [2,88,5,6,8,20,45,64];
     let mayor;
     console.log(enteros.length)
     console.log(enteros)
     for (let index = 0; index < enteros.length; index++) {
         if (index%2!=0) {
             console.log(enteros[index])
         }
         if (enteros[index]%2!=0) {
             console.log(enteros[index]+" nueros impares")
         }    
     }
     console.log(arrayMax(enteros)+"el numero mayor de un array")
     console.log(enteros)
     console.log(enteros.slice(0,enteros.length/2))
     console.log(enteros.slice(enteros.length/2,enteros.length))
     console.log(enteros)
 }
 function arrayMax(arr){
    return Math.max.apply(null, arr)
}
