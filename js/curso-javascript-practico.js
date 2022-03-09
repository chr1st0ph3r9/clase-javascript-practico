console.log("hello,world");


console.group("Cuadrado");



function PerimetroCuadrado(lado){
return lado*4;
}

function AreaCuadrado(lado){
    parseInt(lado)
    return lado*lado;
}



console.log("rejcata");




console.groupEnd();


console.group("Triangulo");


function PerimetroTriangulo(Lado1, Lado2, Base){
    resultado = (Lado1*1)+(Lado2*1)+(Base*1)
    return resultado
}


function alturaTriangulo(Lado1, Lado2, Base){


    if(Lado1===Lado2 || Lado1===Base || Lado2===Base){
        if(Lado1 === Lado2){
            const cat1 = Lado1
            const cat2 = Lado2
            const hipo = Base


            return Math.sqrt((cat1*cat1)-((hipo*hipo)/4))

        }
        else if (Lado1 === Base){
            const cat1 = Lado1
            const cat2 = Base
            const hipo = Lado2

            return Math.sqrt((cat1*cat1)-((hipo*hipo)/4))
        }
        else{
            const cat1 = Base
            const cat2 = Lado2
            const hipo = Lado1

            return Math.sqrt((cat1*cat1)-((hipo*hipo)/4))
        }
    }
    else{
        return("Este no es un Triangulo Isosceles")
    }

    
}


function AreaTriangulo(Lado1,Lado2,Base){

    const Altura = alturaTriangulo(Lado1,Lado2,Base); 

    return (Base*Altura)/2 
}

console.groupEnd();


console.group("Circulo");

const PI = Math.PI ;


function DiametroCirculo(Radio){
    return Radio*2
}

function Circunsferencia(Radio){
    return DiametroCirculo(Radio)*PI
}


function AreaCirculo(Radio){
    return (Radio*Radio)*PI
}


console.groupEnd();


//Coneccion con HTML

//cuadrado

function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const calcularPerimetroCuadrado = PerimetroCuadrado(value);

    alert(calcularPerimetroCuadrado);

}
function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const CalcularAreaCuadrado = AreaCuadrado(value);
    
    alert(CalcularAreaCuadrado);
}

//triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = input1.value;

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = input2.value;

    const inputB = document.getElementById("inputTrianguloBase");
    const valueB = inputB.value;


    const calcularPerimetroTriangulo = PerimetroTriangulo(value1,value2,valueB);

    parseFloat(calcularPerimetroTriangulo);

    alert(calcularPerimetroTriangulo);

}
function calcularAreaTriangulo(){

    const input1 = document.getElementById("inputTriangulo1");
    const value1 = input1.value;

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = input2.value;

    const inputB = document.getElementById("inputTrianguloBase");
    const valueB = inputB.value;



    const calcularAreaTriangulo = AreaTriangulo(value1,value2,valueB);

    alert(calcularAreaTriangulo);
    
}
function calcularAlturaTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = input1.value;

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = input2.value;

    const inputB = document.getElementById("inputTrianguloBase");
    const valueB = inputB.value;


    const calcularPerimetroTriangulo = PerimetroTriangulo(value1,value2,valueB);

    parseFloat(calcularPerimetroTriangulo);

    alert(calcularPerimetroTriangulo);

}



//circulo

function calcularDiametroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const calcularDiametroCirculo = DiametroCirculo(value);

    alert(calcularDiametroCirculo);

}
function calcularCircunsferencia(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const calcularCircunsferencia = Circunsferencia(value);
    
    alert(calcularCircunsferencia);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const calcularAreaCirculo = AreaCirculo(value);
    
    alert(calcularAreaCirculo);
}
