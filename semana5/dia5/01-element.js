let body = document.querySelector("body");
// colocando estilos desde Java Script
body.style.backgroundColor = "#444444";
// elemento.classList
/**
 * Atributo que permite trabajar con las clases de un elemento
 * como añadir clase, listar las clases que el elemento tiene
 * quitar una clase y hasta agregar/quitar clase como un interruptor
 */
let header = document.querySelector("header");
console.log("Lista de Clases del Elemento");
console.log(header.classList);
/**
 * elemento.classList.add("nombre(s)_de_clase(s) separado por comas")
 * Añade una clase a un elemento del DOM
 */
header.classList.add("header");


//elemento.clientwidth => devuelve el ancho del elemento
//elemento.cleinteheight=>devuelve la altura del elemento


let seccion1 = document.querySelector(".seccion1");
console.log(`ancho de seccion1 ${seccion1.clientWidth}`);
console.log(`ancho de seccion1 ${seccion1.clientHeight}`);



//elemento.offsettop=>devuelve la cantiad pixeles que el elemento
//ista con la parte superior del viewport

//elemento.offsetleft=>devuelve la cantia e pixeles que el elemento
//dista con la parte izquiera del viewport


console.log(`pixeles dese top .seccion1: ${seccion1.offsetTop}`);
console.log(`pixeles dese top .seccion1: ${seccion1.offsetLeft}`);


//elemto.scrolltop => devuelve la cantiad e pixeles que el elemnto
//lleva como scroll interno


console.log(`section scrolltop: ${seccion1.scrollTop}`);
let html = document.querySelector("html");


console.log(`html scrolltop: ${html.scrollTop}`);

let altopantalla = window.innerHeight;
let anchopantalla = window.innerWidth;
let imagen=document.querySelector("img");

body.onscroll = (e) => {

    let scrollabajo = html.scrollTop;
    if (scrollabajo > 200) {
        imagen.style.height = "200px";
    }
    else {
        imagen.style.height = scrollabajo + "px";
    }


};