
const lista = [5,3,2,2,2,3,3,4,5,6,6,6,6,6,6,2,3,2,1];
lista.sort((a, b) => a - b);




/*



VERSION 1



var listaFinal = [];



function calcularModa (){



    for(var i = 0 ; i<lista.length ; i++){



        

        function encontrarElem(lista){

            if (lista.find(i)==false){

                var listaCorta = [lista.filter(checkList)];
        
                var cantidadElem = listaCorta.length;

        
                return cantidadElem;

            }
          
        }
        


        function checkList (Elem){

    
   
            return Elem == i
   


        }

        function crearElemA (){
            

            i={cantidad:encontrarElem()}
            listaFinal.push(i)
            
        }
        crearElemA();
        alert(crearElemA);
    }
}
























*/

//version 2

/*
var listaModa = [];


function calcularModaver2(listaAFiltrar){
 

    for (var i = 1 ; i <=listaAFiltrar.length ; i++){


    
        if(listaModa[i]){

            console.log("ya esta en la lista");

        }


        else{

        


        

        function cantidadElementos (){
            var listica = [listaAFiltrar.filter(i)];
            alert(listica);
            var cantidad = listica.length;
            alert(cantidad);
            return cantidad 

    
        }
    
        listaModa.push(i={cantidad:cantidadElementos()});

        alert (listaModa);

        }


        
        
    }
    
    
        return listaModa;
}
*/






//VERSION 4







//PruebaDeFiltro

/*
function prueba(){
    for (var i = 0 ; i<2 ; i++){

        var numeroActualLista = lista[i];
        var cantidadNumerosEnLista = lista.filter(numeroFiltrar);

        function numeroFiltrar(elementoActual){
            return elementoActual==numeroActualLista
        }

        var vecesRepetidas = cantidadNumerosEnLista.length;

        alert(numeroActualLista);
        alert(cantidadNumerosEnLista);
        alert(vecesRepetidas);

    }
}
*/











//version 3

/*

var listaVer3 = [];



function calcularModaVer3(){
for(var i = 0 ; i<lista.length ; i++){

    function conseguirCantidad (){
        var variableConseguir = lista.map(lista.filter[i]);
         return variableConseguir;
     }
    listaVer3.push(conseguirCantidad)
}
alert(listaVer3);
}
*/














// version 4




var numeroMasGrande = 1;
var cantidadNumeroMasGrande = 1;



function calcularModaver4 (){
for(var i = 0 ; i<lista.length ; i++){

    
    var cantidadNumeroActual
    var NumeroActual = lista[i];



    function check (numeroAComparar){
 
        
        return numeroAComparar==NumeroActual
    }

    var cantidadElementosactuales = lista.filter(check);

    
    cantidadNumeroActual = cantidadElementosactuales.length;

    if (cantidadNumeroActual>cantidadNumeroMasGrande){

        numeroMasGrande = NumeroActual;
        
        cantidadNumeroMasGrande = cantidadNumeroActual;


        
    }


}
alert("el numero aparece " + cantidadNumeroMasGrande + " veces");

alert("el numero que mas veces aparece es " + numeroMasGrande);
}