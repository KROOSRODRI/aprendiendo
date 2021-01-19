



peliculas.forEach((peli) => {

    console.log(peli);
});


for (let i = 0; i < peliculas.length; i++) {
    console.log(peliculas[i]);
}



let arreglo = ["jorge", "luis", "karla", "jane"];

const iteracion = (nombre) => {

    console.log(nombre);
};

arreglo.forEach(iteracion);

//---recorriendo peliculas


peliculas.forEach((objpelicula, i) => {

    console.log(`${i}: ${objpelicula.title}`);


});

console.log("/////filter/////");
//fiter
/**
 * funcion de los arreglos que recibeun callback en el cual se
 * puede retornar uno o mas elementos de acuerdoo a ciertascondiciones
 * sirve como un filtro de elementos
 * ejecuta el callback tantas veces como elementos tenga
 * 
 */


let numeros = [20, 1, 5, 6, 7, 8, 14, 49, 50, 26, 45, 32];

let comparador = 10;

let mayores = numeros.filter((elemento, i, arreglo) => {
    if (elemento >= comparador) {
        return elemento;
    }
});

//console.log(mayores);
console.table(mayores);


let peliculase = peliculas.filter((objpelicula) => {
    if (objpelicula.original_language !== "en") {
        return objpelicula;
    }
});

console.log(peliculase);


//const filtro = (arreglo, numero) => {
//    let rpta = arreglo.filter((elemento) => {
//        if (elemento >= numero) {
//            return elemento;
//        }
//
//    });
//    return rpta;
//}