var lista = [
    2,
    32,
    12,
    35,
];

function calcularPromedio(){

    var sumaLista = 0;
    for (var i = 0 ; i<lista.length ; i++){
        
        sumaLista = sumaLista + lista[i];  
    }

    var promedio = 0;
    var promedio = sumaLista/lista.length;

    alert("su promedio es " + promedio)

    return promedio;
}

function varianza (){
    var listaElem = [0,0]


    for (var i = 0 ; i<lista.length ; i++){
        var elemActualB = lista[i];
        
        var elemActual = Math.pow(Math.abs(elemActualB - calcularPromedio()), 2 );

        
        



        listaElem.push(elemActual);

    }


    const varianza = listaElem.reduce((a, b) => a + b * 1);



    const varianzaNum = parseFloat(varianza);




    var listaVarianza = lista.length - 1;


    const varianzaResultado = varianza/listaVarianza;

    alert("su varianza es " + varianzaResultado);
    
    return varianzaResultado;
    
}