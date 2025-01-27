
# Comentarios Generales

Vivi, ante todo quiero felicitarte por haber terminado el proyecto! Se las dificultades que has afrontado, y espero que estés orgullosa de vos y el trabajo que has realizado!!! Siempre hay margen para seguir mejorando y aprendiendo, pero la garra y el empuje de seguir más allá de las piedras del camino, es una soft skill que te va a llevar lejos!!! 💕

En cuanto al TP, el Responsive se ve bien en las distintas pantallas, funciona como es esperado que lo haga. Aunque en mobile y tablet, se podría pulir un poco el menú de herramientas para que quede de top a bottom sin espacios libres, y un poco más ancho para darle un poco mas de espacio a las propiedades. Son detalles, nada grave! Lo más importante es que FUNCIONA! 💪

En cuanto al código, algunas pequeñas observaciones:

* HTML:
  * Me hubiera gustado que, en la línea 15, hubieras modificado el título predeterminado para darle tu toque. De todos modos, esta muy bien escrito e indentado! Felicitaciones!
  

* En el CSS:  
  * Qué bueno que incluiste variables! Acordate porfa que podes usar todos los comentarios que quieras, pero antes de entregar, es imprescindible pulir el proyecto y borrar todos los comentarios del código no utilizado. En las varibles tenes algunas líneas comentadas que deberían no estar allí.
  * En la línea 322, estas usasndo la variable `--letra-1`, pero en el root está definida como `--letra`. Las variables en CSS son super útiles pero hay que usarlas con mucha atención.
  * Hay muchos estilados sobre TAGS HTML. Recordá que hablamos mucho en clase que esta es una práctica muy desaconsejada que puede traer muchos dolores de cabeza. Mi recomendación siempre es que estilen utilizando clases, y según el caso, algún ID.

* En el JS:
  * En la línea 126 declaras `imagenFoto` como variable para el elemento del DOM pero te falta en la declaración establecer `const` o `let`.
  * El modo oscuro/modo claro funciona una sola vez. Pasa a modo claro, vuelve a modo oscuro y ya no vuelve a funcionar. Esto es porque hay un error en las lineas 285 y 286. En ambos listeners agregas la clase "hidden" a modoClaro y se la quitas a modoOscuro. Para que funcione, en el listener de modoOscuro, tenes que invertir add y remove de las lineas 285 y 286. Si no fui muy clara, te hice los comentarios en las líneas correspondientes.
  * Recordá que los console.log son para la etapa de desarrollo, pero para la entrega de cualquier trabajo, es importante removerlos. 
  * En la línea 304, cuando abris la llave del listener, tenes la palabra `checkbox2` que no hace ninguna acción, por lo que habría que quitarla.

* En el README:
  * Recordá agregar la URL del proyecto deployado en el README y/o en las opciones del repositorio en GitHub.

Vivi, Buen trabajo, ¡A seguir aprendiendo!

## Nota final: 8 (ocho)

### Nota desagregada:

- **Menos de 6 (No aprobado)**
- **6 (Aprobado)**
    ✅ Respeta la consigna
    ✅ Estructura correcta de documento HTML
    ✅ Respeta el diseño dado
    ✅ Respeta el funcionamiento
    ✅ Responsive funciona correctamente
- **7 (Bueno)**
    ✅ Buena estructura de proyecto
    ✅  Código bien indentado
    ✅  Comentarios que permiten mejorar la legibilidad del código
- **8 (Muy bueno)**
    ✅ Uso correcto de etiquetas semánticas
    ❌ Buenos nombres de clases
    ✅ Buenos nombres de funciones y variables
- **9 (Muy bueno)**
    ✅ Reutilización de estilos
    ✅ Funciones pequeñas
- **10 (Excelente)**
    ❌ Cumple con las condiciones de accesibilidad avanzada
    ✅ Reutilización de lógica / funciones
    ✅ Commits con mensajes adecuados

❌ ✅