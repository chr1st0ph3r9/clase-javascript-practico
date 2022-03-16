//entries

const juegito = {
    nombre:"zelda",
    año:1998,
    rating:9.2,
}


const juego = Object.entries(juegito);

console.log(juego);

// Value

const infoJuego = Object.values(juegito);

console.log(infoJuego);


// agregar info

const textoBase = `funciona?`;

console.log(textoBase.padStart(37,`este es un texto de prueba, `));

console.log(textoBase.padEnd(22,` SI, funciona`));


//awaits, no entendi nada


const pruebaAwaits = () => {
    return new Promise ((resolve,reject) =>{
        (true)
        ?setTimeout(()=>resolve(`la prueba funciono`),3000)
        :reject(new Error(`test error`))
    })
}


const funcionLlamando = async () =>{ 

    const llamandoAwaits = await pruebaAwaits();
    console.log(llamandoAwaits)
}

funcionLlamando();

const funcionLlamando2 = async () =>{
    try{
        let Llamando = await pruebaAwaits();
        console.log(Llamando);
    }
    catch(error){
        console.log(error)

    }
}

funcionLlamando2();


    

    


