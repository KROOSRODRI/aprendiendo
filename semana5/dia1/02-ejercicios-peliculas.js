console.log(data);

/**
 * retorna un objeto pelicula en caso encuentre la pelicula
 * que el usuario busca segun su nombre
 * en caso contrrario se returna null
 * @param {*} nombre 
 */

const getpeliculasbyname = (nombre) => {

    for (let i = 0; i < data.peliculas.length; i++) {
        if (data.peliculas[i].title === nombre) {
            //return=>retorna un valor de la funcion pero ademas
            //finaliza el for automaticamente
            //return data.peliculas[i];
        }

    }
    return null;
};



let peliencontrada = getpeliculasbyname("Atrapa ese email");
console.log(peliencontrada);


//2
/**
 * funcion que retorna una lista de peliculas que tienen
 * menos de 200 votos(en la porpieda vote_count)
 * en caso de no tener peliculas con menos de 200 votos
 */

const getmenosvotadas = (vote) => {

    for (let i = 0; i < data.peliculas.length; i++) {
        if (data.peliculas[i].vote_count <= 200) {
            return data.peliculas[i];
            return data.peliculas[i].title;
        }
    }
    return null
};



const getpeliculasextranjeras=()=>
{
    for (let i = 0; i < data.peliculas.length; i++) {
        if (data.peliculas[i].original_language != "es") {
            return data.peliculas[i];
        }
    }
    return null


};
let vota= getpeliculasbyname(`es`);
console.log(vota);

