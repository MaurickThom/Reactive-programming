// creacion de ejemplos unicast y multicast

class Observable{
    constructor(subscriptionFn){
        this.subscriptionFn = subscriptionFn
    }
    subscribe(observer){
        return this.subscriptionFn(observer)
    }
    pipe(...operators){
        return operators.reduce((source,next)=>next(source),this)
    }
}

class Subject extends Observable {

}


// Operators
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
            obverser.complete()
        }catch(err){

        }

    }
    return new Observable(subcriptionFn)
}
const observer = tag => ({
    next(value) {
        console.log(`${tag}:`, value);
    }
});

http('https://jsonplaceholder.typicode.com/users')
    .subscribe(observer('subscriber-1'));


