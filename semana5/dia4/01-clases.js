/**
 * los nombres de las calses deben de iniciar con una mayuscula
 */


class restaurante {
    aforo = 0;
    nromesas = 0;
    direccion = "";
    categoria = "";
    telefonos = [];
    nombre = "";
    delivery = false;
    /**
     * para la tipificacion 
     * sera tipo A si el aforo es mayor a 500 personas
     * sera tipo B si el aforo es mayor a 300 personas
     * sera tipo C si el aforo es menor igual a 300 personas
     */
    tipificacion;

    /**
     * 
     * funcion que se ejecuta automaticamente al momento de crear un obejto
     * @param {*} _aforo 
     * @param {*} _nromesas 
     * @param {*} _direccion 
     * @param {*} _categoria 
     * @param {*} _telefonos 
     * @param {*} _nombre 
     * @param {*} _delivery 
     */
    constructor(
        _aforo = 0,
        _nromesas = 0,
        _direccion = "sin direccion",
        _categoria = "sin categoria",
        _telefonos = [],
        _nombre = "sin nombre",
        _delivery = false,

    ) {
        // this: acceder al scope interno de la clase.
        //thios : se usa para acceder a los atributos y metodos de la clase
        this.aforo = _aforo;
        this.nromesas = _nromesas;
        this.direccion = _direccion;
        this.categoria = _categoria;
        this.telefonos = _telefonos;
        this.nombre = _nombre;
        this.delivery = _delivery;
        if (this.aforo > 500) {
            this.tipificacion = "A";
        } else if (this.aforo > 300) {
            this.tipificacion = "B";
        } else {
            this.tipificacion = "C";
        }
    }

    imprimirtelefonos() {
        console.log(this.telefonos);
        for (let i = 0; i < this.telefonos.length; i++) {
            console.log(`☎📞 ${this.telefonos[i]}`);
        }
    }


    imprimirtelefonos2() {
        /* function imprimir() {
            console.log(this.telefonos);
        }
        imprimir();
 */
        for (const tel of this.telefonos) {
            console.log(`telefono: ${tel}`);
        }
    }


    toString() {
        return this.nombre;

    }

}
// instanciando una clse : creando un objeto a partir de uan clase
let objtanta = new restaurante(800, 200, "vallecito", "comida criolla", ["925753612", "925753612"], "tanta", true);
let objastrid = new restaurante();


//sobjastrid.aforo = 400;

console.log(objtanta);
console.log(objastrid);


let objlalucha = {

    aforo: 30,
    nromesas: 6,
};
console.log("la lucha");
console.log(objlalucha);



let objramadita = {
    aforo: 20,
    nromesas: 5,
};

console.log(objtanta);
console.log(objramadita);

objtanta.imprimirtelefonos();
objtanta.imprimirtelefonos();



//console.log(typeof objastrid);
