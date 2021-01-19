/**
 * funcion que retorna el numero ed casos de personas en el mundo
 */


const gettotaldecasosenelmundo=()=>{


};


//2
/**
 * funcion que retornar un objeto completo de cifras
 * e un pais dado su nombre, en caso no encuentre el pais
 * retorna null
 */

 const getcifrasbynamepais =(pais)=>{

 };










//3
/**
 * funcion que retorna el porcentaje de casos de personas
 * recuepradas frente al total de casos en un pais
 * para ello se debe porporcionar el nombre del pais
 * para buscar un pais se ebe hacer uso de la funcion del
 * ejercicio 2(obligatorio)
 * @param {*} pais 
 */

const getporcentajedderecuperadosbynamepais = (pais)=>{

};



//4
/**
 * funcion que retorna un arreglo de todos los paises con el siguiente
 * objeto como estructura
 * {
 * pais :"nombre del pais" ,
 * pruebasrealizadas:5000,
 * pruebaspositivas:25000,
 * porcentajepruebas:50%
 * }
 * implica que cada pais debe mostrar el porcentaje de casos positivos
 * frente al total de pruebas realizadas
 */



const generararrayporcentajedepruebaspositivas =()=>{

    let arregloresultado=[];
    for(let i=0; i<covid.length;i++){
        let porcentaje = (covid[i].cases*100)/covid[i].totalTests;
        let objtemporales={

            pais:covid[i].country,
            pruebasrealizadas:covid[i].totalTests,
            pruebaspositivas: covid[i].cases,
            porcentajepruebas:porcentaje,

        };
        arregloresultado.push(objtemporales)
    }
       return arregloresultado;
};


let resultado = generararrayporcentajedepruebaspositivas();
 console.log(resultado);