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
        }
    })
)
const http = url =>{
    const subcriptionFn =  async observer => {
        try{
            const response = await fetch(url)
            const data = await response.json()
            observer.next(data)
            observer.complete()
        }catch(err){
            observer.error(err)
        }finally{
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
http('https://jsonplaceholder.typicode.com/users')
    .subscribe(observer('subscriber-1'));

http('https://jsonplaceholder.typicode.com/users')
    .subscribe(observer('subscriber-2'));


