// creacion de ejemplos unicast y multicast
// operadores multicast ( operadores de intercambio) y unicast


class Observable{
    constructor(subscriptionFn){ // cada vex que alguien crea un observable necesita colocar un callback con la ejecucion
                                 // por defecto y cuando alguien se suscribe se ejecutará ese callback
        this.subscriptionFn = subscriptionFn
    }
    subscribe(observer){ // esta funcion recibe un observador donde es un objeto con tres funciones
                        // complete
                        // error
                        // next
        return this.subscriptionFn(observer) 
    }
    pipe(...operators){
        return operators.reduce((source,next)=>next(source),this)
    }
}

class Subject extends Observable {

}


// Operators

// operator unicast
const map = fn => source => new Observable(
    observer => source.subscribe({
        next(value){
            observer.next(fn(value))
        },
        error(err){
            observer.error(err)
        }
    })
) // retorna un funcion que toma una fuente observable y devuelve una nuevo observable , que esta suscrita a la fuente
const http = url =>{
    const subcriptionFn =  async observer => {
        try{
            const response = await fetch(url)
            const data = await response.json()
            observer.next(data)
        }catch(err){
            observer.error(err)
        }

    }
    return new Observable(subcriptionFn)
}
const observer = tag => ({
    next(value) {
        console.log(`${tag}:`, value);
    },
    complete(){
        console.log('complete');
    },
    error(err){
        console.error(err)
    }
});

// operator multicast


/////////////////////////////////////////

// operador unicast
// http('https://jsonplaceholder.typicode.com/users')
//     .subscribe(observer('subscriber-1'));

// http('https://jsonplaceholder.typicode.com/users')
//     .subscribe(observer('subscriber-2'));


const observable$ = http('https://jsonplaceholder.typicode.com/users').pipe(
    map(res=>res[0])
)
observable$.subscribe({ // funcion suscripcion == funcion productor
    next(data){
        console.log(data)
    },
    error(err){
        console.log(err)
    },
    complete(){
        console.log('complete')
    }
})

// explicacion
/**
 * cuando llamamos al subscribe estamos ejecutando los operadores dentro del pipe
 * de manera secuencial como en este caso solo existe el map
 * se ejecutará el mapa observable, que se suscribe al http observable. cuando
 * la fuente http observable emite un nuevo valor, el valor primero alcanza la función de
 * suscripcion del mapa(ya que es la única en el pipe , si hubiera mas emitiría de forma secuencial
 * hasta pasar por todos los operadores dentro del pipe) luego de aplicar la funcion de proyeccion
 * en el valor, el mapa observable emite el valor a la úlima suscripcion. esto se llama la cadena observable
 * 
 */


// observable$.subscribe({
//     next(data){
//         console.log(data)
//     },
//     error(err){
//         console.log(err);
//     },
//     complete(){
//         console.log('complete');
//     }
// })