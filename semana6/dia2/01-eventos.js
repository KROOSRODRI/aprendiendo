let btnLight = document.getElementById("btnLight");
let btnDark = document.getElementById("btnDark");
let btnToggle = document.getElementById("btnToggle");
let linkDark = document.getElementById("linkDark");
let cuadrado = document.getElementById("cuadrado");
let cuadrado2 = document.getElementById("cuadrado2");
let cuadrado3=document.getElementById("cuadrado3");

btnLight.onclick = () => {
    console.log("clic en Light");
    //    let href = linkDark.getAttribute("href"); // GETATTRIBUTE obtiene el atributo
    linkDark.setAttribute("href", ""); // SETATTRIBUTE entrega un valor
};
btnDark.addEventListener("click", () => {
    console.log("clic en Dark");
    linkDark.setAttribute("href", "./01-eventosdark.css");
});
btnToggle.onclick = (e) => {
    let href = linkDark.getAttribute("href");
    if (href.length > 0) {
        // esta en DARK
        linkDark.setAttribute("href", "");
    } else {
        linkDark.setAttribute("href", "./01-eventosdark.css")
    }
};

cuadrado.onclick = (e) => {
    console.log(e);
    console.log(`tipo de evento=> ${e.type}`);
    console.log(`elemento objetivo del evento`);
    console.log(e.target);
    console.log(`valores ed x y y con respecto al VIEWPORT`);
    console.log(`x=> ${e.clientX} - y =>${e.clientY}`);
    console.log(`valores ed x y y con respecto al MISMO ELEMENTO`);
    console.log(`x=> ${e.offsetX} - y =>${e.offsetY}`);

};

/**
 * elemnto.onmousemove
 * evento que se desencadena cuiadndo el mause se mueve por encima el elemnto
 * 
 */

cuadrado2.onmousemove = (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    if (e.ctrlKey) {
        let bolita = document.createElement("div");
        bolita.classList.add("bolita");
        bolita.style.left = x + "px";
        bolita.style.top = y + "px";
        bolita.style.display = "block";
        cuadrado2.appendChild(bolita);
        console.log(x);
    }

};

/**
 * 
 */
cuadrado3.onmouseover=(e)=>{
   cuadrado3.classList.add("sombra");
};

cuadrado3.onmouseleave=(e)=>{

    cuadrado3.classList.remove("sombra");
};