const url = "https://reqres.in/api/users";
const tbody = document.getElementById("tbody");
const alertaCargando = document.getElementById("alertaCargando")
// FORMA DE USAR 1
/*
console.log("PARTE 1");
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
  console.log("PARTE 2");*/
// FORMA DE USAR 2
const getUsuarios = async () => {
    let response = await fetch(url);
    let myJson = await response.json();
    return myJson;
};
const dibujarTabla = (usuarios) => {
    // por cada usuario aplicamos FOREACH
    usuarios.forEach((objUsu, i) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
    <th>#</th>
    <td>${i}</td>
    <td>${objUsu.id}</td>
    <td>${objUsu.first_name}</td>
    <td>${objUsu.last_name}</td>
    <td>${objUsu.email}</td>
    <td><img src=${objUsu.avatar} class= `rounded - circle` width=`50`/></td>
    `;
        tbody.appendChild(tr);
    });
    //muestre la tabla
    miTabla.removeAttribute("hidden");
    alertaCargando.setAttribute("hidden","")
};
getUsuarios().then((rpta) => {
    dibujarTabla(rpta.data);
});