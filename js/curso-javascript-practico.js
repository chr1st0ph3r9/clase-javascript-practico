console.log("hello,world");


console.group("Cuadrado");



function PerimetroCuadrado(lado){
return lado*4;
}

function AreaCuadrado(lado){
    return lado*lado;
}



console.log("rejcata");




console.groupEnd();


console.group("Triangulo");


function PerimetroTriangulo(Lado1, Lado2, Base){
    return Lado1+Lado2+Base
}


function AreaTriangulo(Base, Altura){
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
