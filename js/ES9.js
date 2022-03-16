//objetos con ES9 y como unirlos

const uncharted = {
    nombre:`Uncharted The Drake collection`,
    año:2018,
    precio:19.99,
    consola:`Playstation y proximamente PC`,

}


let {precio, ...all} = uncharted;

console.log(all);


//unir objetos

let juegoBatman={
    nombre : "Batman arkham asylum",
    año : 2012,
    precio : 19.50,
    consola : `para todas las consolas disponibles y PC`,
}

let infoBatman = {
    ...juegoBatman,
    synopsis:`es uno de los mejores juegos de superheroes y el comienzo de una saga`,

}

console.log(infoBatman);

//promise ES9

const promesaES9 = () => {
    return new Promise((resolve,reject)=>{
        (true)
        ?resolve(`tenemos una promesa ES9, Cumplida!!`)
        :reject(new Error(`no funciono`))
    })
}


promesaES9()
.then(Response =>console.log(Response))
.catch(error => console.log(error))
.finally(()=>console.log(`termino el proceso`))


// regex

const ejemRegex = /([0-9]{2})-([0-9]{2})-([0-9]{4})/;

const fechaNcimiento =ejemRegex.exec(`25-12-1998`);

const dia = fechaNcimiento[1];

const mes = fechaNcimiento[2];

const año = fechaNcimiento[3];

console.log(`yo naci el ${dia} de ${mes} del año ${año}`);
