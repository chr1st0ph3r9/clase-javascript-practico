
// llamados dinamicos

const htmlButon = document.getElementById("btn");

htmlButon.addEventListener("click", async function(){
    const pruebaDinamico = await import("./file.js")
    pruebaDinamico.holaExport()
})


//numeros mas altos que 2**52

const numeroMasAltoN = 2n**51n;

const numeroImposibleN = numeroMasAltoN + 1n);

const numeroPosible = numeroMasAltoN + 500n;

console.log(numeroMasAltoN);

console.log(numeroImposibleN);

console.log(numeroPosible);

//or 

const numeroMasAltoN2 = BigInt(2**54);

console.log(numeroMasAltoN2)




//promise allSettled

const promise1 = new Promise((resolve,reject)=>reject("reject"));
const promise2 = new Promise((resolve,reject)=>resolve("resolve"));
const promise3 = new Promise((resolve,reject)=>resolve("resolve 1"));

Promise.allSettled([promise1,promise2,promise3])
.then(response => console.log(response));



// globalthis

console.log(globalThis);

//generar una alternativa ante un null


let ejemploNull = null ?? `segunda opcion en ejemplo`;

console.log(ejemploNull);



// optional channing? sirve para programar contando a un archivo que aun no tenemos

const user = {};

console.log (user?.contactInfo?.phone);

if(user?.contactInfo?.phone){
    console.log(`si extiste!!`);
}
else{
    console.log(`todavia no existe`);
}





//ES12




// reemplazar texto

let ejemploString = `las peliculas del 2022 han sido muy buenas pero no terminan de llegar a las del 2020, donde las peliculas estban en un auge`;

let arreglarString =ejemploString.replace(`estban`, `estaban`);

let cambioString = arreglarString.replaceAll(`las peliculas`, `los juegos`);

console.log(ejemploString);
console.log(arreglarString);
console.log(cambioString);

// volver info de una class privada

class correos {
    #mostrar(val){
        console.log(val)
    };

    get #informacion(val2){
        console.log(val2)

    }

}

const infoClass = new correos();

infoClass.mostrar(`me gusta el helado`);
infoClass.informacion(`el helado es bueno`);


// any ES12 usado para mostarr el primer valor disponible

const promesa1 = new Promise ((resolve,reject)=> reject(1));
const promesa2 = new Promise ((resolve,reject)=> resolve(2));
const promesa3 = new Promise ((resolve,reject)=> resolve(3));

Promise.any([promesa1,promesa2,promesa3])
.then(response=>console.log(response));

//ref para que no sea eliminado, ?

class cualquiera{
    objeto(elemento){
        this.ref = new WeakRef(elemento)
    }
}

