var lista = [
    2,
    32,
    12,
    35,
];

function calcularPromedio(lista){

    var sumaLista = 0;
    for (var i = 0 ; i<lista.length ; i++){
        
        sumaLista = sumaLista + lista[i];  
    }

    var promedio = 0;
    var promedio = sumaLista/lista.length;

    alert(promedio)
    return promedio;
}
