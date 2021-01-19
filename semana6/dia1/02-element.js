let list = document.getElementById("lista");

let btngenerar = document.getElementById("btngenerar");


btngenerar.onclick = () => {

    /**
     * document.createElement("etoqueta del elemento")
     * tetorna un elemnto html que aun no esta enm el DOM
     * imaginemos que dicho elemento esta en el limbo
     */
    let litemporal = document.createElement("li");
    let numeroAleatorio = (Math.random() * (45 - 1) + 1).toFixed(0);

    litemporal.innerText = numeroAleatorio;
    /**
     * elemtno.setatribute("nombre_del_atributo","valro el atributo")
     * coloco un atributo el elemnto con respectivo valor
     * hablamos e atributos html ejm:id,class,borer,name.value
     */


    litemporal.setAttribute("class", "lista-item");
    litemporal.onclick = () => {
        console.log(`uy alquien esta haciendo click en ${numeroAleatorio}`);

    };

 







    lista.appendChild(litemporal);
    /**
     * permitir como maximo 7 numeros e loteria
     * valida que si un numero se repite salga otro
     * hint usar un arreglo para guarar lso numeros y sacar lacantida de nuemros
     * 
     */


};