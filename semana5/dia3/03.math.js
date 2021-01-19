//la clase math
// es una clase estatica
//que nos provee de funciones amtematicas

// ejm: math.sqrt(numero)


let raizde25=Math.sqrt(25);
console.log(raizde25);



// math.floor(numero_decimal)}
//redondea un umero al proximo entero inferior
//ejm math.floor(5.9999999)=5

console.log(Math.floor(12.999999));


//math.ceil(numero_decimal)
//redondea un numero al proximo entero superior
//ejm:math.ceil(0.2);


console.log(Math.ceil(0.2));


// math.round(numero_decimal)
//redondea un numero respetando las formas normales de redondeo


console.log(Math.round(2.5));


//math.random()=> genera un numero aleatorio
//entre 0 y 1


let aleatorio=Math.random();
console.log(aleatorio);


//math.random()*(max-min) +min
//genera un numero aleatorio entre min y max


let aleatorioquinceycien=Math.random()*(100-15)+15;
console.log(aleatorioquinceycien);

//numero.tofixed(numero_de_decimales)

console.log(aleatorioquinceycien.toFixed(2));
console.log(Math.round(22.23));

let precio=99.57;
console.log(precio.toFixed(1));


