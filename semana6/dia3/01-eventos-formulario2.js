let selectPais = document.getElementById("selectPais");
let selectDeaprtamento = document.getElementById("selectDepartamento");

const poblarPaises = () => {
    let options = "<option value=0>---seleccione un pais---</option>";

    paises.forEach((objpais) => {
        options += `<option value="${objpais.id}">${objpais.nombre} </option>`


    });
    selectPais.innerHTML = options;

};

poblarPaises();

const llenardepartamentos = (idpaisseleccioando) => {

    let depastemporales = departamentos.filter(
        (objDepartamento) => objDepartamento.paisId === idpaisseleccioando);
    let options = "<option value=0>---selecciones</option>";
    depastemporales.forEach((objedepa) => {

        options += `<option value="$objDepa.id">${objedepa.nombre}</option>`
    });
    selectDeaprtamento.innerHTML=options;
    selectDeaprtamento.removeAttribute("disable");
};







selectPais.onchange = (e) => {
    console.log(e);
    let idpaisseleccioando = selectPais.value;
    llenardepartamentos(idpaisseleccioando);


};