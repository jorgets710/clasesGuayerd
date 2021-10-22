// como definir un array 
var autos = ["saab","volvo","bmw"];
console.log(autos[1]);

var autos2=[];
autos2[0]="volvi";
autos2[1]= "saab";
autos2[3]= "bmw";

var bicicletas = new Array("mohave","realing","firebird")

console.log(bicicletas[1]);

bicicletas [1]=ktm;
console.log(bicicletas[1]);

// un array puede contener distintos tipos de datos
const persona = ["pedro","sin apellido",30, true];
console.log(persona)

// los arrays pueden tener propiedades internas
const gato = {
    nombre:"remiendo",
    edad :"7",
    color:"naranja"
}
console.log(gato)
console.log(gato.nombre,"es",gato.color);

const arrayDecosas= [];
arrayDecosas[0]= date.now;
arrayDecosas[1]= gato;
arrayDecosas[2]= bicicletas;
arrayDecosas[3]= autos2[1];

console.log(arrayDecosas)
console.log(arrayDecosas[3][1])

const frutas =["naranjas","mandarinas","banana","manzanas","kiwi","melon","pelon","uva","damasco","moras","papaya","fresas","mango","maracuya","cereza","granada","higo","palta","tomate","frambuesa","frutillas","sauco","nuez","almendra","arandanos","pomelo","limon","menbrillo","coco","cacao","zapallo","piña","anana"];

console.log(frutas.length);
console.log(frutas.length -1)

frutas[frutas.length -1];
console.log(frutas);

// agregar elementos a un array
frutas.push("pistaccio");
console.log(frutas);
frutas.push("castañas, uvas blancas, avellana, mani") // se agrega como un texto concatenado
console.log(frutas);

// eliminando elementos de un array
frutas.pop("platano");
console.log(frutas);

frutas.shift(); //elimina el primer elemento del array
console.log(frutas);
frutas.unshift("naranjas") //agrega un elemento al principio
console.log(frutas)
console.log[23];
delete frutas[23]; //borra un elemento,creo q en su posicion no se reemplaza
console.log[23];

frutas.slice(0,1);
console.log(frutas);

// como fusionar arrays !!
const verduras =["lechuga","papa","rucula","cebolla","cebolla verdeo","puerro","morron","repollo","perejil","ajo","acelga","espinaca","mandioca","batata","zanahoria","radicheta","colifror","brocoli","zapallo","zuccini","pepino","zapallito","remolacha","choclo","cebolla","boñiato"];

// el metodo concat sirve para fusionar o mergear dos o mas arrays
const frutasVerduras = frutas.concat(verduras);
console.log(frutasVerduras);

frutasVerduras.concat(bicicletas,autos2,autos);
console.log (frutasVerduras);