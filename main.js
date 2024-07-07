const botonDescargar = document.getElementById("descargar");
const container = document.getElementById("container");
 
function descargarMeme() {
    
    domtoimage.toBlob(container).then(function (blob) {
        saveAs(blob, 'mi-meme.png')
        console.log(blob);
    })
}
botonDescargar.addEventListener("click", descargarMeme);


    /*Filtros */


const imagen = document.getElementById("container-img")


const brillo = document.getElementById("brillo");
brillo.addEventListener('input', function(e){
    console.log(e.target.value);
    const brillo_value = e.target.value
    imagen.style.filter = `brightness(${brillo_value})`
});

const opacidad = document.getElementById("opacidad");
opacidad.addEventListener('input', function(e){
    console.log(e.target.value);
    const opacidad_value = e.target.value
    imagen.style.filter = `opacity(${opacidad_value})`
});

const contraste = document.getElementById("contraste");
contraste.addEventListener("input", function(e){
    console.log(e.target.value);
    const contraste_value = e.target.value
    imagen.style.filter =`contrast(${contraste_value})`
});

const desefonque = document.getElementById("desefonque");
desefonque.addEventListener("input" , function(e){
    console.log(e.target.value);
    const desefonque_value = e.target.value
    imagen.style.filter =`blur(${desefonque_value})`
});

const escalaDeGrises =document.getElementById("escalaDeGrises");
escalaDeGrises.addEventListener("input", function(e){
    console.log(e.target.value);
    const escalaDeGrises_value = e.target.value
    imagen.style.filter = `grayscale(${escalaDeGrises_value})`
});

const sepia = document.getElementById("sepia");
sepia.addEventListener("input", function(e){
    console.log(e.target.value);
    const sepia_value = e.target.value
    imagen.style.filter = `sepia(${sepia_value})`
});

const hue = document.getElementById("hue");
hue.addEventListener('input', function(e){
    console.log(e.target.value);
    const hue_value = e.target.value
    imagen.style.filter =`hue-rotation(${hue_value})`
});

const saturado = document.getElementById("saturado");
saturado.addEventListener("input", function(e){
    console.log(e.target.value) 
    const saturado_value =e.target.value
    imagen.style.filter =`saturation(${saturado_value})`
})

 

const negativo = document.getElementById("negativo")
negativo.addEventListener("input", function(e) {
    console.log(e.target.value);
    const negativo_value = e.target.value
    imagen.style.filter = `invert(${negativo_value})`
});
/* botones de imagen texto y modo oscuro*/ 
const botonTexto = document.getElementById("texto")
const botonImagen = document.getElementById("imagen")
const seccionTexto = document.getElementById("aside-texto")
const seccionImagen = document.getElementById("aside-imagen")


botonTexto.addEventListener("click" , function(){
    seccionTexto.style.display = "block";
    seccionImagen.style.display ="none"
})
botonImagen.addEventListener("click" , function(){
    seccionTexto.style.display = "none";
    seccionImagen.style.display ="block"
})
/*color de fondo */
const fondo_color= document.getElementById("fondo-color")
fondo_color.addEventListener("input" ,function(e){
    console.log(e.target.value)
    const fondo_color_value = e.target.value
    container.style.backgroundColor = fondo_color_value})


/*efecto de imagen */
const imagenFoto = document.getElementById("imagenFoto")
const efecto = document.getElementById("efecto");
efecto.addEventListener("input", function(e){
    console.log(e.target.value)
    const efecto_value = e.target.value
    imagen.style.backgroundBlendMode = efecto_value

})
/*Boton restaura */

const restaurar = document.getElementById("restaurar");
restaurar.addEventListener("click", function(e){
    console.log("boton funcionando" ,restaurar);
    imagen.style.filter ="none"
})
console.log(imagenFoto.src)
/* Ingresando la url */
 const cambiar = function(){
    imagenFoto.src= input.value
    console.log(cambiar)
}


const elegirImagen = document.getElementById("elegirImagen");
elegirImagen.addEventListener("input",cambiar);
console.log(elegirImagen)
    



 
    
    




/*boton modo oscuro 
let modoOscuro = document.getElementById("modoOscuro");

let modoClaro = document.getElementById("modoClaro");*/

