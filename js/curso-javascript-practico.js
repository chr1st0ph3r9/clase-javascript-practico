console.log("hello,world");


console.group("Cuadrado");




const LadoCuadrado = 3;

console.log("los lados del cuadrado son de " + LadoCuadrado + "cm de largo");

const PerimetroCuadrado = LadoCuadrado *4;

console.log("El perimetro del cuadrado es de " + PerimetroCuadrado + "cm");

const AreaCuadrado = LadoCuadrado * LadoCuadrado;

console.log("El area de el cuadrado es de " + AreaCuadrado + "cm^2");

console.log("rejcata");




console.groupEnd();


console.group("Triangulo");


const LadoTriangulo1 = 7 ;
const LadoTriangulo2 = 7 ;
const BaseTriangulo3 = 3 ;

console.log("los lados del triangulo son de " 
+ LadoTriangulo1
+ "cm, "
+ LadoTriangulo2
+ "cm, "
+ BaseTriangulo3 
+ "cm");


const AlturaTriangulo= 5.6;

console.log("La altura del triangulo es de " 
+ AlturaTriangulo 
+ "cm");

const PerimetroTriangulo = LadoTriangulo1 + LadoTriangulo2 + BaseTriangulo3;

console.log("El perimetro del triangulo es de " 
+ PerimetroTriangulo 
+ "cm")


const AreaTriangulo = (BaseTriangulo3 * AlturaTriangulo) /2;

console.log("El area del triangulo es de " + AreaTriangulo + "cm^2");


console.groupEnd();


console.group("Circulo");

const RadioCirculo = 5;

console.log("El radio del circulo es " + RadioCirculo + "cm");


const DiametroCirculo = RadioCirculo * 2;

console.log("El Diametro del circulo es " + DiametroCirculo + "cm");


const PI = Math.PI ;

const Circunsferencia = DiametroCirculo * PI;

console.log("La circunsferencia del circulo es " + Circunsferencia + "cm");


const AreaCirculo = (RadioCirculo * RadioCirculo ) * PI;

console.log("El area del circulo es " + AreaCirculo + "cm^2");

console.groupEnd();
