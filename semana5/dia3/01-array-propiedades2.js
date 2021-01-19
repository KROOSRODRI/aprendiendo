

/**
 * devuelve un arreglo de la misma cantidad edelementos del areglo
 * origial con las transformaciones que el ususario le haga acada elemento
 * a diferencia del filter, la funcion map no puee retorar menos elemetos
 */
console.log("/////////map/////////");

let nombres = ["Simon", "Pedro", "Juan", "Jorge", "Jose"];

let nombremayusculas = nombres.map((name, i) => {
    if (i % 2 == 0) {
        return {
            origin: name,
            minuscula: name.toLowerCase(),
            mayuscula: name.toUpperCase(),
        };
    }

});


console.log(nombremayusculas);


//----------------------

console.log("////////splice////////");
//array.splice(posicion_inicial,elementos_a_eliminar,elementos_a_insertar)
let productos = [
    "TV Samsung",
    "Tablet Android",
    "Laptop Razer",
    "smarphone Xioami"
];

//apartir ed la posicion 1, eliminar 1 elemento

productos.splice(1, 1);
console.log(productos);

//a partir de la posicion 0, aliminar 1 elemento e insertar el elemento PC Gamer
productos.splice(0, 1, "PC Gamer");
console.log(productos);
// a partir de la posicion , no eliminar elementos e insertas 2 valores
productos.splice(2,0,"mause Hyper","Audifonos Razer");
console.log(productos);


//-------indexof--------------

console.log("//////indexOf////");
let posicionmause=productos.indexOf("mause Hyper");
console.log("posicion del mause");
console.log(posicionmause);



//-------pop//////////
//sirve para etraer el ultimo arreglo
//la funcion ademas retorna dicho elemtno
console.log("//////pop//////");
let elementoeliminado=productos.pop();
console.log(`eliminaste: ${elementoeliminado}`);
console.log(productos);


