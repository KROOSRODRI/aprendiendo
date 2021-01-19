let productos=[];

const dibujarCards=()=>{
productos.forEach((objproducto)=>{

    let cardProducto=$(`<div class="productos__producto">
        <h4>${objproducto.nombre}</h4>
        <p><span>Codigo: </span>${objproducto.codigo} </p> </div>`);
    $("#prouctos").append(cardProducto);
});
    
};


$("#formulario").submit(function(e){
e.preventDefault();
let objproducto={
    nombre:$("#inputNombre").val().trim(),
    codigo:$("#inputCodigo").val(),

};
productos.push(objproducto);

});