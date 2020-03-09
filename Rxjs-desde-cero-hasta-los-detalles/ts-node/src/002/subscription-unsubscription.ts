import { Observable,Subscriber,Subscription, Observer } from "rxjs";
import { clearInterval } from "timers";

const observer = <Observer<number>> {
    next(data){
        console.log("next -> data", data)
    }
}

// let id:NodeJS.Timeout

const interval$ = new Observable<number>((subscriber:Subscriber<number>)=>{
    let count = 0
    const id:NodeJS.Timeout = setInterval(()=>{
        console.log(count);
        if(count >= 10)
            subscriber.complete()
        subscriber.next(++count)
    },500)
    return ()=>{
        clearInterval(id)
        console.log('intervalo destruido')
    }
})

const subcription:Subscription = interval$.subscribe(observer)


// es el primero 
setTimeout(_=>{
    subcription.unsubscribe()
    // clearInterval(id)
},3000)

// por mas que te desuscribas del flujo el setInterval se seguirá ejecutando
