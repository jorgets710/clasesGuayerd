/**

Utilizar el mismo array de ciudades, solicitar al usuario un número y remover esa cantidad de ciudades del array. Mostrar dos opciones: Sacando los datos desde el principio , y desde el final del array.
Crear un array de 8 posiciones con nombres de artistas musicales y mostrar POR SEPARADO:
Su longitud
El último elemento.
Solo las posiciones pares
todos los elementos
todos los elementos menos el último 
Todos los elementos menos el primero
todos los elementos separados por “*”.
Solicitar al usuario un nuevo artista para reemplazar al último ingresado.
       5)  Crear un array de 8 posiciones con números enteros  y mostrar:
Su longitud
Solo las posiciones impares.
Solo los NUMEROS impares.
El mayor de ellos
Mostrar la mitad de elementos del array. (Pensar esto como si no supieramos la cantidad de posiciones que tiene.)
 */
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


function artistas(params) {
    const artistas= ["jndsfj","nasnda","sanda","jsabas"];
    console.log (artistas)
    artistas.splice(artistas.length / 3,0,5);
    console.log(artistas)
}