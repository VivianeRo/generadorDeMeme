const botonDescargar = document.getElementById("descargar");
const container = document.getElementById("container");
 
function descargarMeme() {
    
    domtoimg.toBlob(document.getElementById(container)).then(function (blob) {
        saveAs(blob, 'mi-meme.png')
        console.log(blob);
    })
}
botonDescargar.addEventListener("click", descargarMeme);





let imagen = document.getElementById("container-img")
let brillo = document.getElementById("brillo");
brillo.addEventListener('input', function(e){
    console.log(e.target.value);
    let brillo_value = e.target.value
    imagen.style.filter = `brightness(${brillo_value})`
});

let negativo = document.getElementById("negativo")
negativo.addEventListener("input", function(e) {
    console.log(e.target.value);
    let negativo_value = e.target.value
    imagen.style.filter = `invert(${negativo_value})`
});
/* botones de imagen texto y modo oscuro*/ 
let botonTexto = document.getElementById("texto")
let botonImagen = document.getElementById("imagen")
let seccionTexto = document.getElementById("aside-texto")
let seccionImagen = document.getElementById("aside-imagen")


botonTexto.addEventListener("click" , function(){
    seccionTexto.style.display = "block";
    seccionImagen.style.display ="none"
})
botonImagen.addEventListener("click" , function(){
    seccionTexto.style.display = "none";
    seccionImagen.style.display ="block"
})
/*boton modo oscuro */
let modoOscuro = document.getElementById("modoOscuro");

let modoClaro = document.getElementById("modoClaro");

