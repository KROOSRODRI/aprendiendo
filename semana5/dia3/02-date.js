//date() clase cuyos iobejtos trabajan con fechas


let hoy = new Date();
console.log(hoy);

/**
 * getfullyear() retorna el año dde una variabble de tipo fecha
 */

let anioactual = hoy.getFullYear();
console.log("año actual");
console.log(anioactual);


/**
 * getmonth() retorna el mes de una variable de tipo fecha
 */

let mesactual = hoy.getMonth();
console.log("mes actual:");
console.log(mesactual);

/**
 * getdate() retorna el dia del calenario de una variable date
 */


let diacalendarioactual = hoy.getDate();
console.log("dia calendarioa ctual");
console.log(diacalendarioactual);



let stringfecha = `${diacalendarioactual}-${mesactual + 1}-${anioactual}`;
console.log("fecha en string");
console.log(stringfecha);


/**
 * funcion que retorna el numero del dia de la semana empezando desde el 0
 * 
 */


let diasemana = hoy.getDay();
console.log("dia de la semana");
console.log(diasemana);

let horaactual = hoy.getHours();
let minutoactual = hoy.getMinutes();
let segundoactual = hoy.getSeconds();
let milisegundosactual = hoy.getUTCMilliseconds();

console.log(`hora actual: ${horaactual}`);
console.log(`hora actual: ${minutoactual}`);
console.log(`hora actual: ${segundoactual}`);
console.log(`hora actual: ${minutoactual}`);




//INICIAR UNA VARIABLE DE TIPO FECHA
//UBICADO EN NAVIDAD POR EJEMPLO

let navidad2020=new Date(2020,11,25);
console.log(navidad2020);

//la diferencia de las fechas en milisegundos

let navidadmenoshoy=navidad2020-hoy;

let semanasparanavidad=((((navidadmenoshoy/100)/60)/60)/24)/7;

console.log(`semanas para navidad: ${semanasparanavidad}`);


