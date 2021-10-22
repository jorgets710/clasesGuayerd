function turnOnOff() {
// taking image in image variable
var image = document.getElementById('Image');

if (image.src.match("lamparaPrendida"))
    image.src = "./img/lamparaApagada.png";
else
    image.src = "./img/lamparaPrendida.png";
}

