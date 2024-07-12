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
imagenFoto = document.getElementById("imagenFoto")
const fondo_color= document.getElementById("fondo-color")
fondo_color.addEventListener("input" ,function(e){
    console.log(e.target.value)
    const fondo_color_value = e.target.value
    imagenFoto.style.backgroundColor = `${fondo_color_value}`})


/*efecto de imagen 

const efecto = document.getElementById("efecto");
efecto.addEventListener("input", function(e){
    console.log(e.target.value)
    const efecto_value = e.target.value
    imagen.style.backgroundBlendMode = efecto_value

})*/
/*Boton restaura */

const restaurar = document.getElementById("restaurar");
restaurar.addEventListener("click", function(e){
    console.log("boton funcionando" ,restaurar);
    imagen.style.filter="none"
    container.style.backgroundColor= "white"

})

/* Ingresando la url */
const elegirImagen = document.getElementById("elegirImagen");
console.log(elegirImagen)
 /*const cambiar = function(){
    imagenFoto.src= input.value
    console.log(cambiar)
}*/


elegirImagen.addEventListener("click",function(){
     const elegirImagen1 = this.value

     imagenFoto.src = elegirImagen1

    console.log(elegirImagen1)
});



/*elegirImagen.addEventListener("change", function() {
    imagenFoto.setAttribute("src", elegirImagen.value);
    imagenFoto.setAttribute("alt", "image.png");}
);*/
console.log(elegirImagen)
/*ASIDE TEXTO*/
/*Texto superior */
const top_text = document.getElementById("top-text")
console.log(top_text)
const text_superior =document.getElementById("text_superior")
console.log(text_superior)
const text_inferior = document.getElementById("text_inferior")
console.log(text_inferior)

 
 

top_text.addEventListener('input',function(){
    text_superior.innerText= top_text.value
    console.log(top_text)
})
/*text inferior */
const botton_text = document.getElementById("botton-text")
botton_text.addEventListener("input", function(){
    text_inferior.innerHTML= botton_text.value
    console.log(botton_text)
})
/*efecto del texto fontFamily */
const text_efecto = document.getElementById("text-efecto");
text_efecto.addEventListener("input" ,function(e){
    text_superior.style.fontFamily = e.target.value;
    console.log(text_efecto);
})
text_efecto.addEventListener("input",function(e){
    text_inferior.style.fontFamily = e.target.value;
    console.log(text_efecto);
})
/*tamaño de letra */
 const input_number = document.getElementById("input-number");
 input_number.addEventListener("input", function(e){
    let fontSize = this.value;
    text_superior.style.fontSize = fontSize + "px";
    text_inferior.style.fontSize = fontSize + 'px'
    

    

 })
 /*direcciones de texto*/

 const textoCentro = document.getElementById("textoCentro");
 const textoDerecha = document.getElementById("textoDerecha");
 const textoIzquierda = document.getElementById("textoIzquierda");

 textoCentro.addEventListener("click", function(e){
    container.style.textAlign = "center"
    console.log("funcionando", textoCentro)
 })
 textoDerecha.addEventListener("click", function(e){
    text_superior.style.alignItems = "right"
    
    console.log("funcionando",textoDerecha)
 })
 textoIzquierda.addEventListener("click", function(e){
    container.style.alignItems = "left"

    console.log("funcionando" ,textoIzquierda)
 }) 
 /*color de la letra */
 const text_color_color = document.getElementById("text-color-color")
 const text_fondo_fondo = document.getElementById("text-fondo-fondo")

 text_color_color.addEventListener("input", function(e){
    text_superior.textContent = top_text.value
    text_superior.style.color = text_color_color.value;
    text_inferior.textContent = top_text.value
    text_inferior.style.color = text_color_color.value;
    
    
    console.log("FUNCIONANDO" ,text_color_color)
 })
 /*color de fondo */
 text_fondo_fondo.addEventListener("input", function(e){
    container.style.backgroundColor = text_fondo_fondo.value;

    console.log("FUNCIONANDO", text_fondo_fondo)
 })
 /*contorno de la letra */

 const contornoNinguno = document.getElementById("contornoNinguno");
 const contornoClaro = document.getElementById("contornoClaro");
 const contornoOscuro = document.getElementById("contornoOscuro");

 contornoOscuro.addEventListener("click", function(e){
    text_superior.classList.add("contornooscuro")
    text_superior.classList.remove("contornoclaro")
    text_inferior.classList.add("contornooscuro")
    text_inferior.classList.remove("contornoclaro")
    console.log('funcionandoS',contornoOscuro)


 })
 contornoClaro.addEventListener("click", function(e){
    text_superior.classList.add("contornoclaro")
    text_superior.classList.remove("contornooscuro")
    text_inferior.classList.add("contornoclaro")
    text_inferior.classList.remove("contornooscuro")
    console.log('funcionandoS',contornoClaro)
 })
 contornoNinguno.addEventListener("click", function(e){
    text_superior.classList.add("contornoninguno")
    text_inferior.classList.add("contornoninguno")
    
    console.log('funcionandoS',contornoNinguno)
 })
 /*espaciado*/

const espaciado = document.getElementById("espaciado")
espaciado.addEventListener("click", function(e){
    const espaciado1 = espaciado.value
    text_superior.style.padding = `${espaciado1}px`
    text_inferior.style.padding = `${espaciado1}px`
    console.log("funcionando" ,espaciado1)
})
/*interniado*/
const intelineado = document.getElementById("intelineado")
intelineado.addEventListener("click",function(e){
    const intelineado1 =intelineado.value;
    text_superior.style.lineHeight = intelineado1;
    text_inferior.style.lineHeight= intelineado1;
    console.log("funcionando", intelineado1)
})
const efecto = document.getElementById("efecto");
efecto.addEventListener("input", function(e){
    console.log(e.target.value)
    const efecto_value = efecto.value;
    imagenFoto.style.backgroundBlendMode = `${efecto_value}`})
    

/*boton modo oscuro */
const headerBoton =document.getElementById("headerBonton")
const modoOscuro = document.getElementById("modoOscuro");
const modoClaro = document.getElementById("modoClaro");
const body =document.getElementById("body")


modoClaro.addEventListener("click",function(e){
    body.classList.add("buttonClaro");
    body.classList.remove("buttonOscuro");
    modoClaro.classList.add("hidden")
    modoOscuro.classList.remove("hidden")
});
console.log(modoClaro)

modoOscuro.addEventListener("click",function(){
    body.classList.add("buttonOscuro");
    body.classList.remove("buttonClaro");
    modoClaro.classList.add("hidden")
    modoOscuro.classList.remove("hidden")
});
console.log(modoOscuro)
 /*checkbox */


 const checkbox = document.getElementById("checkbox")
 checkbox.addEventListener("click",function(e){
    text_superior.classList.toggle("hidden")

 })
 const checkbox1 = document.getElementById("checkbox1")
 checkbox1.addEventListener("click",function(e){
    text_inferior.classList.toggle("hidden")

 })
/*
const checkSup = document.getElementById("check_sup_txt");
checkSup.addEventListener("click", function() {
    supText.classList.toggle("hidden");
});

const checkInf = document.getElementById("check_inf_txt");
checkInf.addEventListener("click", function() {
    infText.classList.toggle("hidden");
}); */