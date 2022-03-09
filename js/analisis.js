var listaColB = colombia.map(salarioCol);

function salarioCol (persona){
    return persona.salary;
}

listaColB.sort((a, b) => a - b);



//PROMEDIO

function calcularPromedioCol(){

    const totalSalarios = listaColB.reduce((a,b) => a + b);
    
    return totalSalarios/colombia.length;


}



//MEDIA



function calcularMediaCol(){

    const mitadListaCol = parseInt(listaColB.length/2);
    const valorMitadLista=listaColB[mitadListaCol]
    var media;

    if (checkPar==0){

        //es par
        const num1 = valorMitadLista;

        const buscar = mitadListaCol - 1;
        const num2 = listaColB[buscar];

        const resultado = (num1 + num2);


        media = resultado/2;



    }
    else{
        //no es par


        media=valorMitadLista;

    }

    function checkPar(){
        return mitadListaCol % 2;
    }

    return media;


}


//VARIANZA


function varianza (){
    var listaElem = []


    for (var i = 0 ; i<listaColB.length ; i++){
        var elemActualB = listaColB[i];
        
        var elemActual = Math.pow(Math.abs(elemActualB - calcularPromedioCol()), 2 );

        listaElem.push(elemActual);

    }


    const varianza = listaElem.reduce((a, b) => a + b );


    var listaVarianza = listaColB.length - 1;


    const varianzaResultado = varianza/listaVarianza;

    
    return varianzaResultado;
    
}




//TOP 10%

const empiezaLista = parseInt((listaColB.length*90)/100);
const cantidad = parseInt(listaColB.length-empiezaLista);
const listaCol10 = listaColB.splice(empiezaLista,cantidad);


//PROMEDIO10%

function calcularPromedioCol10(){

    const totalSalarios = listaCol10.reduce((a,b) => a + b);
    
    return totalSalarios/listaCol10.length;


}



//MEDIA10%



function calcularMediaCol10(){

    const mitadListaCol10 = parseInt(listaCol10.length/2);
    const valorMitadLista10=listaCol10[mitadListaCol10]
    var media10;

    if (checkPar==0){

        //es par
        const num1 = valorMitadLista10;

        const buscar = mitadListaCol10 - 1;
        const num2 = listaCol10[buscar];

        const resultado = (num1 + num2);


        media10 = resultado/2;



    }
    else{
        //no es par


        media10=valorMitadLista10;

    }

    function checkPar(){
        return mitadListaCol10 % 2;
    }

    return media10;


}


//VARIANZA10%


function varianza10 (){
    var listaElem = []


    for (var i = 0 ; i<listaCol10.length ; i++){
        var elemActualB = listaCol10[i];
        
        var elemActual = Math.pow(Math.abs(elemActualB - calcularPromedioCol10()), 2 );

        
        



        listaElem.push(elemActual);

    }


    const varianza = listaElem.reduce((a, b) => a + b * 1);




    var listaVarianza = listaCol10.length - 1;


    const varianzaResultado = varianza/listaVarianza;

    
    return varianzaResultado;
    
}





