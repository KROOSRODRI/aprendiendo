
let btntitulo1 = document.querySelector("#btntitulo1");
let btntitulo2 = document.querySelector("#btntitulo2");

let h1 = document.querySelector("h1");

let selectPeliculas=document.getElementById("selectPeliculas");
let btnSelect = document.getElementById("btnSelect");



btntitulo1.onclick = () => {

    /**
     * elemento.innertet => settea el docuemnto euna etiqueta
     * ojo, se ebe considerar solo el contenio a nivel
     * et exto y no html
     */
    h1.innerText = "nuevo <strong>Titulo</strong> 1";
};

btntitulo2.onclick = () => {

    /**
     * elemento.ennerhtml=>settea el contenidi de una
     * a nivele texto y tambien reconoce etiquetas html
     */
    h1.innerHTML = "Nuevo  <strong>Titulo</strong> 2";
};


const llenarselect = () => {
    let contenido = "";
    peliculas.forEach((objPelicula) => {
        contenido = contenido + `<option>${objPelicula.title}</option>`; 
    });
    selectPeliculas.innerHTML=contenido;
}
btnSelect.onclick = () => {
    llenarselect();
};

