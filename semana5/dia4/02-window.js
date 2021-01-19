//window=> objeto que repersenta al navegador
// y todas sus propiedades internas
//es un objeto global


//console.log(window);

//obtener la altura y el ancho del viewport

let alto = window.innerHeight;
let ancho = window.innerWidth;

console.log(`alto : ${alto}`);
console.log(`ancho: ${ancho}`);

//window.location contiene un obj con informacion
//de la direccion que se esta visitando a traves del navegador

let navegacion = window.location;

console.log(navegacion);


let url = navegacion.href;
console.log(url);

console.log(navegacion);



console.log(window.document);