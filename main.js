const botonDescargar = document.getElementById("descargar");
const container = document.getElementById("container");
 
function descargarMeme() {
    
    domtoimage.toBlob(container).then(function (blob) {
        saveAs(blob, 'mi-meme.png')
        console.log(blob);
    })
}
botonDescargar.addEventListener("click", descargarMeme);


    /*FILTROS */


const imagen = document.getElementById("container-img")


const brillo = document.getElementById("brillo");
brillo.addEventListener('input', function(e){
    
    const brillo_value = e.target.value
    imagen.style.filter = `brightness(${brillo_value})`
});

const opacidad = document.getElementById("opacidad");
opacidad.addEventListener('input', function(e){
    
    const opacidad_value = e.target.value
    imagen.style.filter = `opacity(${opacidad_value})`
});

const contraste = document.getElementById("contraste");
contraste.addEventListener("input", function(e){

    const contraste_value = e.target.value
    imagen.style.filter =`contrast(${contraste_value}%)`
});

const desefonque = document.getElementById("desefonque");
desefonque.addEventListener("input" , function(e){
    
    const desefonque_value = e.target.value
    imagen.style.filter =`blur(${desefonque_value}px)`
});

const escalaDeGrises =document.getElementById("escalaDeGrises");
escalaDeGrises.addEventListener("input", function(e){

    const escalaDeGrises_value = e.target.value
    imagen.style.filter = `grayscale(${escalaDeGrises_value}%)`
});

const sepia = document.getElementById("sepia");
sepia.addEventListener("input", function(e){
    
    const sepia_value = e.target.value
    imagen.style.filter = `sepia(${sepia_value}%)`
});

const hue = document.getElementById("hue");
hue.addEventListener('input', function(e){
    
    const hue_value = e.target.value
    imagen.style.filter =`hue-rotation(${hue_value}deg)`
});

const saturado = document.getElementById("saturado");
saturado.addEventListener("input", function(e){
    
    const saturado_value =e.target.value
    imagen.style.filter =`saturation(${saturado_value}%)`
})

 

const negativo = document.getElementById("negativo")
negativo.addEventListener("input", function(e) {
    
    const negativo_value = e.target.value
    imagen.style.filter = `invert(${negativo_value})`
});
/* BOTONES DE TEXTO ,IMAGEN Y MODO OSCURO*/ 
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

/* URL*/
const elegirImagen = document.getElementById("elegirImagen");

 

elegirImagen.addEventListener("input",function(){
    const elegirImagen1 = this.value

    imagenFoto.src = elegirImagen1

   console.log(elegirImagen)
});
console.log(elegirImagen);


/*COLOR DE FONDO*/
const efecto = document.getElementById("efecto");
efecto.addEventListener("input", function(e){
    console.log(e.target.value)
    const efecto_value = efecto.value;
    container.style.backgroundBlendMode = efecto.value

});


/* IMAGENFOTO ES EL ID DE LA IMAGEN */
imagenFoto = document.getElementById("imagenFoto")

 /*FONDO-COLOR ES EL BOTTON PARA CAMBIAR EL COLOR */
const label_fondo_color= document.getElementById("label-fondo-color")
const fondo_color= document.getElementById("fondo-color")
fondo_color.addEventListener("input" ,function(e){
    console.log(e.target.value)

    label_fondo_color.innerText = fondo_color.value
    imagenFoto.style.display ='none'

    container.style.backgroundImage = `url(${elegirImagen.value})`

    container.style.backgroundColor = `${fondo_color.value}`
    container.style.display = "flex"
    container.style.justifyContent = "space-between"
    container.style.alignItems = "center"
    container.style.backgroundRepeat = "no-repeat"
    container.style.backgroundPosition ="center"
    container.style.backgroundSize = "300px 200px"
});

/*BOTON RESTAURAR*/

const restaurar = document.getElementById("restaurar");
restaurar.addEventListener("click", function(e){
    console.log("boton funcionando" ,restaurar);
    imagen.style.filter="none"
    container.style.backgroundColor= "white"

});

/*ASIDE TEXTO*/

/*TEXTO SUPERIOR */
const top_text = document.getElementById("top-text");
const text_superior =document.getElementById("text_superior");
const text_inferior = document.getElementById("text_inferior");

top_text.addEventListener('input',function(){
    text_superior.innerText= top_text.value
    
});

/*TEXT INFERIOR */
const botton_text = document.getElementById("botton-text");
botton_text.addEventListener("input", function(){
    text_inferior.innerHTML= botton_text.value
    
})

/*EFECTO DE TEXTO FONTFAMILY*/
const text_efecto = document.getElementById("text-efecto");
text_efecto.addEventListener("input" ,function(e){
    text_superior.style.fontFamily = e.target.value;
    
});
text_efecto.addEventListener("input",function(e){
    text_inferior.style.fontFamily = e.target.value;
    
})
/*TAMAÑO DE LETRA */
 const input_number = document.getElementById("input-number");
 input_number.addEventListener("input", function(e){
    let fontSize = this.value;
    text_superior.style.fontSize = fontSize + "px";
    text_inferior.style.fontSize = fontSize + 'px';
 });
 /*DIRECCIONES DE TEXTO*/

 const textoCentro = document.getElementById("textoCentro");
 const textoDerecha = document.getElementById("textoDerecha");
 const textoIzquierda = document.getElementById("textoIzquierda");

 textoCentro.addEventListener("click", function(e){
    text_superior.style.textAlign = "center";
    text_inferior.style.textAlign = "center";
    
 });
 textoDerecha.addEventListener("click", function(e){
    text_superior.style.textAlign = "left";
    text_inferior.style.textAlign ="left";  
 });
 textoIzquierda.addEventListener("click", function(e){
    text_superior.style.textAlign = "right";
    text_inferior.style.textAlign ="right";
 });

 /*COLOR DE LETRA*/
 const text_color_color = document.getElementById("text-color-color")
 const text_fondo_fondo = document.getElementById("text-fondo-fondo")

 text_color_color.addEventListener("input", function(e){
    text_superior.textContent = top_text.value
    text_superior.style.color = text_color_color.value;
    text_inferior.textContent = top_text.value
    text_inferior.style.color = text_color_color.value;  
 });

 /*COLOR DE FONDO */
 text_fondo_fondo.addEventListener("input", function(e){
    container.style.backgroundColor = text_fondo_fondo.value;
 });

 /*CONTORNO DE LETRA*/

 const contornoNinguno = document.getElementById("contornoNinguno");
 const contornoClaro = document.getElementById("contornoClaro");
 const contornoOscuro = document.getElementById("contornoOscuro");

 contornoOscuro.addEventListener("click", function(e){
    text_superior.classList.add("contornooscuro")
    text_superior.classList.remove("contornoclaro")
    text_inferior.classList.add("contornooscuro")
    text_inferior.classList.remove("contornoclaro")
 });
 contornoClaro.addEventListener("click", function(e){
    text_superior.classList.add("contornoclaro")
    text_superior.classList.remove("contornooscuro")
    text_inferior.classList.add("contornoclaro")
    text_inferior.classList.remove("contornooscuro")
 });
 contornoNinguno.addEventListener("click", function(e){
    text_superior.classList.add("contornoninguno")
    text_inferior.classList.add("contornoninguno")   
 });

 /*ESPACIADO*/

const espaciado = document.getElementById("espaciado")
espaciado.addEventListener("input", function(e){
    const espaciado1 = espaciado.value
    text_superior.style.padding = `${espaciado1}px`
    text_inferior.style.padding = `${espaciado1}px`   
});
/*INTELINEADO*/
const intelineado = document.getElementById("intelineado")
intelineado.addEventListener("click",function(e){
    const intelineado1 =intelineado.value;
    text_superior.style.lineHeight = intelineado1;
    text_inferior.style.lineHeight= intelineado1;   
});

/*BOTON MODO OSCURO Y MODO CLARO*/
const headerBoton =document.getElementById("headerBonton");
const modoOscuro = document.getElementById("modoOscuro");
const modoClaro = document.getElementById("modoClaro");
const body =document.getElementById("body");

modoClaro.addEventListener("click",function(e){
    body.classList.add("buttonClaro");
    body.classList.remove("buttonOscuro");
    modoClaro.classList.add("hidden");
    modoOscuro.classList.remove("hidden");
});
modoOscuro.addEventListener("click",function(){
    body.classList.add("buttonOscuro");
    body.classList.remove("buttonClaro");
    modoClaro.classList.add("hidden")
    modoOscuro.classList.remove("hidden")
});

 /*CHECKEBOX DE SACAR EL TEXTO SUPERIOR Y INFERIOR */

 const checkbox = document.getElementById("checkbox")
 checkbox.addEventListener("click",function(e){
    text_superior.classList.toggle("hidden")

 });
 const checkbox1 = document.getElementById("checkbox1")
 checkbox1.addEventListener("click",function(e){
    text_inferior.classList.toggle("hidden")

 });
 /*CHECKBOX DE TRANSPARENCIA */
 const checkbox2 = document.getElementById("checkbox2");
 checkbox2.addEventListener("click",function(){checkbox2

    imagenFoto.style.display ='none'
    container.style.backgroundImage = `url(${elegirImagen.value})`
    container.style.backgroundColor = `${fondo_color.value}`
    container.style.display = "flex"
    container.style.justifyContent = "space-between"
    container.style.alignItems = "center"
    container.style.backgroundRepeat = "no-repeat"
    container.style.backgroundSize = "100% 100%"
    console.log( "funcionando", checkbox2)
 });
