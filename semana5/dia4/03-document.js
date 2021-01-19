//window.document
//document


//propiedades mas importantetes}
/**
 * document.getelemnetbyid()
 */

let header = document.getElementById("header");
console.log(header);

/**
 * document.getElementsByClassName
 */
let secciones = document.getElementsByClassName("miseccion");
console.log(secciones);
console.log("cantidad de secciones");
console.log(secciones.length);


let seccionesArreglo = Array.from(secciones);
console.log(seccionesArreglo);
seccionesArreglo.forEach((seccion) => {
    console.log(seccion);

});


/**
 * document.quertselector("selector de un elemento")
 * retorna un elemento del DOM dado el selector al estilo CSS
 * por ejemplo rojo=> un elemento con calse rojo
 */
let footerapp = document.querySelector("#footer");
console.log(footerapp);

/**
 *document.querySelectorAll
 retorna una coleccion de elementos del DOM dado un selector como en css
 */

let divfooter = document.querySelectorAll(".footerapp_seccion")
console.log(divfooter);
divfooter.forEach((div) => {
    console.log(div);
}
);


let navegacion=document.querySelectorAll("#navegacion");
console.log(navegacion);