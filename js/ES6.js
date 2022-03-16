//como dejar parametros por defecto

//Forma Javascript o tradicional

function ejempoTradicional (ropa , precio , año){
    let ropa= ropa || "general";
    let precio = precio || 50;
    let año = año || 2022;

    return ropa + precio + año;
}

//forma ES6

function ejemploES6 (ropa = "general" , precio = 50, año = 2022 ){

    return ropa + precio + año;

}





//Concatenar

//concatenacion tradicional

function concatenarTradicional(){

    let ejemplo1 = "forma";
    let ejemplo2 = "en que";


    console.log("esta es la" + " " + ejemplo1 + " " + ejemplo2 + " se concatena \n tradicionalmente")

}

//Concatenacion ES6 usando comillas invertidas

function concatenarES6(){

    let ejemplo1 = "forma";
    let ejemplo2 = "en que";

    console.log(`esta es la ${ejemplo1} ${ejemplo2} se concatena
    con ES6`)
    

}


//llamando elementos de un objeto

let carro = {

    nombre:"mustang",
    dueño:"juan",
    velocidadMax:145 + "km"
}

//tradicional

console.log(`${carro.nombre} tiene una velocidad maxima de ${carro.velocidadMax}`);

//ES6

let {nombre,velocidadMax} = carro;

console.log(`${nombre} tiene una velocidad maxima de ${velocidadMax}`);





//como crear una array con otras arrays


let array1 = ["jose", "maria","titan"];
let array2 = ["Odin", "zeus", "Seth"];

let arrayF = ["Ares", ...array1, "Kelsier", ...array2, "Slowhand"];

console.log(arrayF)

// creacion de objetos con variables

let tablet = "kindle";
let precioT = 120 + "usd";
let añoT = 2022;


// tradicional

let tabletKindle = {
    tablet:tablet,
    precio:precioT,
    año:añoT
}


// ES6

let tabletKindleES6 = {

    tablet,
    precioT,
    añoT
}

console.log(`${tabletKindle} 
${tabletKindleES6}`);



// creacion de un array en base a otro array

let pacientes = [{nombreP:"Jose", edadP: 23},
{nombreP:"william", edadP:19 },
{nombreP:"luisa", edadP:35}]

//tradicional

let listaNombres = pacientes.map(function(elemnto){
    return elemnto.nombreP
})


//ES6

let listaNombresES6 = pacientes.map(elemento => {return elemento.nombreP})

//ver2

let listaNombresES6ver2 = (nombre , edad) =>{
//codigo?

}


//ver3

let listaNombresES6ver3 = nombre =>{
    //codigo?
}



//crear una funcion basica ES6


let valorMultiplicado = num => num*num;


//PROMESAS (me goa mata)


const compraCasa = () => 
{
    return new Promise 
    ((resolve,reject)=>
    {
        if (true){
            resolve("La casa es nuestra");
        }
        else{
            reject("rayos, la casa no es nuestra");
        }
        
    });
}

compraCasa()
 .then(respons => console.log(respons));



 //clases ES6

 class calculadora{

    valores (){
        this.valor1 = 0;
        this.valor2 = 0;
    }
    suma (valorS1,valorS2){
        this.valor1 = valorS1;
        this.valor2 = valorS2;

        return this.valor1 + this.valor2;

    }

 }


 const calcular = new calculadora ();


 console.log(calcular.suma(4,7));



 // modulos

 import {saludoModulo} from "./modulo";

 saludoModulo();


 //generator

 function* generatorEjem (){
     if(true){
         yield `este es un generator`;
     }
     if(true){
         yield `sigo haciendo pruebas de generator`;
     }
     if (true){
         yield `esta es la ultima prueba de generator, la siguiente deberia dar ERROR`
     }
 }

 const varGenerator = generatorEjem()

 console.log(varGenerator.next().value);
 console.log(varGenerator.next().value);
 console.log(varGenerator.next().value);
 console.log(varGenerator.next().value);

 