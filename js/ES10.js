//flat con ES10

const arrayDeArrays = [5,6,7,[4,5,8,[7,0,3,[4,9,1]]]];

console.log(arrayDeArrays);
console.log(arrayDeArrays.flat(3));

//flatmap para operar sobre los valores

const arrayFlatMap = [2,6,2,8,4,7];

console.log(arrayFlatMap.flatMap(num => [num, num * 2]));

// prueba trim


let pruebaTrim = `   esta es una prueba`;

console.log(pruebaTrim)

console.log(pruebaTrim.trimStart());


let pruebaTrim2 = `esta es otra prueba       `;

console.log(pruebaTrim2);

console.log(pruebaTrim2.trimEnd());


// recibiendo errores por promesas (still don´t get it)

try{
    
} catch{
    error
}


// convertir de array a objeto

let programas3D = [[`Blender`,`un Programa para hacer todo de 3D y gratis!!`],[`3D max`,`un programa caro pero con buen soporte y es el estandar en el mercado`]];

console.log(Object.fromEntries (programas3D));

// ingresar a la descripcion de un simbolo

let simbolTexto = `este es un simbolo plus ultra`;

let simbolo = Symbol(simbolTexto);

console.log(simbolo.description);