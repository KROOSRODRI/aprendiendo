


let frase = "Agua que no has de BEBER, dejala correr";
let cantidadletras = frase.length;
console.log(`cantidad de caracteres: ${cantidadletras}`);


//retorna uan copia de texto convertida en minusculas
let minusculas = frase.toLowerCase();
console.log(minusculas);

//retorna uan copia de texto convertida en mayusculas
let mayusculas = frase.toLocaleUpperCase();
console.log(mayusculas);

/**
 * string.substr(posicion_inicial,cantidad)
 * retorna uan subcadena dada una posicion inicial y una cantidad de
 *  caracateres a partir de ducah posicion inicial
 *
 */


let subcadena = frase.substr(2, 10);
console.log(subcadena);



/**
 * string.substring
 */

let subcadenainiciofin = frase.substring(8, 12);
console.log(subcadenainiciofin);


let existeBEBER = frase.includes("BEBER");
console.log(`BEBER esta incluida?: ${existeBEBER}`);




let posicionpalabracadena = frase.indexOf("cadena");
console.log(posicionpalabracadena);


let posicionpalabracadenas = frase.indexOf("cadenas");
console.log(posicionpalabracadenas);



let fraseconespacios = "                    ups!";
console.log(fraseconespacios.trim());