let btnlight = document.getElementById("btnlight");
let btndarks = document.getElementById("btndarks");
let btntoggle = document.getElementById("btntoggle");


let seccion1 = document.querySelector(".seccion1");
let seccion2=document.querySelector(".seccion2");
//evento click

btnlight.onclick = () => {
    //console.log("click! a btnlight");
    if (seccion1.classList.contains("sombra-darks") === true) {
        seccion1.classList.remove("sombra-darks");

    }
    seccion1.classList.add("sombra-light");
};

btndarks.onclick = () => {
    if (seccion1.classList.contains("sombra-light") === true) {
        seccion1.classList.remove("sombra-light");

    }
    seccion1.classList.add("sombra-darks");
}

btntoggle.onclick = () => {
    if (seccion1.classList.contains("sombra-light") == true) {
        seccion1.classList.remove("sombra-light");
        seccion1.classList.add("sombra-darks");
    }
    if (seccion1.classList.contains("sombra-darks") == true) {
        seccion1.classList.remove("sombra-darks");
        seccion1.classList.add("sombra-light");
    } else {
        seccion1.classList.add("sombra-light")
    }

}

seccion2.onclick = () => {
  
    seccion2.classList.add("sombra-darks");
}