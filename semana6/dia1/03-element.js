let tbody = document.getElementById("tbody");
let llenarTabla = () => {
  /**
   * iterar el arreglo COVID
   * en cada vuelta crear una fila y 5 columnas
   * agregar las columnas a la fila
   * al final de cada vuelta, agregar la fila al tbody
   */
  covid.forEach((objPais, i) => {
    let fila = document.createElement("tr");
    let tdNro = document.createElement("td");
    tdNro.innerText = i + 1;
    let tdPais = document.createElement("td");
    tdPais.innerText = objPais.country;
    let tdInfectados = document.createElement("td");
    tdInfectados.innerText = objPais.cases;
    let tdFallecidos = document.createElement("td");
    tdFallecidos.innerText = objPais.deaths;
    let tdRecuperados = document.createElement("td");
    tdRecuperados.innerText = objPais.recovered;
    let tdAcciones = document.createElement("td");
    let btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = "Eliminar";
    btnEliminar.onclick = () => {
        alert(`Estas seguro de eliminar ${objPais.country}`);
        fila.setAttribute("hidden", "hidden");  // ocultar elemento
    };
    tdAcciones.appendChild(btnEliminar);
    fila.appendChild(tdNro);
    fila.appendChild(tdPais);
    fila.appendChild(tdInfectados);
    fila.appendChild(tdFallecidos);
    fila.appendChild(tdRecuperados);
    fila.appendChild(tdAcciones);
    tbody.appendChild(fila);
  });
};
llenarTabla();