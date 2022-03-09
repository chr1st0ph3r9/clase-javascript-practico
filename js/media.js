var lista = [
    100,
    1200,
    1000,
    400,
];

lista.sort(function(a, b){return a-b});

var media;

function calcularMedia(){

    media =parseInt(lista.length/2);
    const mediana = lista[media];

    if (lista.length % 2===0){

        //par

        const num1 = mediana;

        const pocision2Lista = media - 1;
        const num2= lista[pocision2Lista];

        const promedioPar = (num1 + num2) / 2;

        return promedioPar;

    }

    else{
    
        //inpar



        const resultado = parseInt(media); 

        alert (mediana);

        return resultado;


    }
}
