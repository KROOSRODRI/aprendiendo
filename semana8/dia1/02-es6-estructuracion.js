let restaurant = {
    nombre: "el pollo real",
    tipo: "polleria",
    aforo: 500,
    geo:{

        lat:-70,
        ing:-50,
    }

};

// creando una valiable "nombre" que es copia de restaurant.nombre

let {nombre, aforo:capacidad}=restaurant;
console.log(nombre);
console.log(capacidad);
let {geo:{lat:latitud, lng:longitud}} = restaurant;
//console.log(geo); // error
console.log(latitud, longitud);
const nombreYaforo = ({nombre, aforo}) => {
    console.log(nombre, aforo);
};
nombreYaforo(restaurant);
// si quiero una copia
let copiaRest = {...restaurant};
console.log(copiaRest);



const modificarAforo = (objRestaurant,nuevoAforo) =>{

    return{
        ...objRestaurant,
        aforo: nuevoAforo,
    };
};


let restaurantGrande=modificarAforo(restaurant,5000);
console.log(restaurantGrande);