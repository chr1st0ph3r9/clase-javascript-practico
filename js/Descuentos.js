//cupones
const cupones = [ 
  
    cupon1 = {codigo:"5gdiw", descuento:20},
 
    cupon2 = {codigo:"456ef", descuento:45},
 
    cupon3 = {codigo:"109ds", descuento:33},
];

function CheckearDcto(){

    const input = document.getElementById("descuento");
    
    const descuentoC = input.value;
        var descuentoP 
    
        var encontrar = false
    
        var i=0

    while (i<cupones.length && encontrar==false ) {
   
        if (descuentoC == cupones[i].codigo){

            descuentoP=cupones[i].descuento * 1;
            encontrar=true;

        }

        i++

    }
return descuentoP






//calculo precio

}

function calculoPrecioFinal(){

    const input1 = document.getElementById("precio");
    var precioOriginal = input1.value * 1;


    const descuento = CheckearDcto();


    const porcentajePagar = 100 - descuento;
    const precioFinal = (precioOriginal * porcentajePagar) /100;


    const textoJs = document.getElementById("textoJs");
    textoJs.innerText="el descuento de cupon es de un " + descuento +"% " + "el precio a pagar es de: " + precioFinal;

    return (precioFinal);
}


