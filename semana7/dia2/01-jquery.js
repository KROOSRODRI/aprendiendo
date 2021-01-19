//Capturar ELementos con JQuery
let btnCambiarParrafo = $("#btnCambiarParrafo");
// evento JQUERY
$("#btnCambiarParrafo").click(() => {
    $("#parrafo1").text("Ya es hora del break");
});
$("#btnAgregarNumero").click(() => {
    let random = (Math.random() * (47 - 0) + 0).toFixed(0);
    let li = $(`<li>${random}</li>`);
    $("#numeros").append(li);
});



$("#btnEstilosLi").click(()=>{
    // aplicar estilos CSS a uno o varios elementos
    $("#numeros li").css("backgroundColor", "#444").css("color", "#eee");
    //lis = Array.from(lis); // FROM convierte una lista en ARRAY
    /*lis.forEach((liTmp)=>{
        liTmp.style.backgroundColor = "#444";
        liTmp.style.color = "#eee";
    });*/
});
$("#btnFormulario").click(() => {
    $("#formulario").addClass("formulario");
});