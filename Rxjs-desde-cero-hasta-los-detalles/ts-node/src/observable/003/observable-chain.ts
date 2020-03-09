import { Subject, Observable, Observer, Subscriber } from 'rxjs'

// diferencia entre unsubscribe y complete
// el complete llama aun unsubscribe pero un unsubscribe solo desuscribe no llama a ningun complete

const observer = (tag:string)=>(
    <Observer<number>>{
        next: data => console.log(tag," data", data),
        error: err => console.log(tag, " error", err),
        complete: () => console.log(tag," complete")
    }
)

const obs$ = new Observable<number>((subscriber:Subscriber<number>)=>{
    let count = 0
    const id = setInterval(_=>{
        
        subscriber.next(++count)
        // subscriber.complete() si vemos en la terminal tambien ejecuta el unsubscribe
        console.log("count interval", count)
    },500)
    return () => { // esta funcion se ejecuta cuando hacen unsubscribe
        clearInterval(id)
        console.log("clearInterval")
    }
})

const subscription_1 = obs$.subscribe(observer('A'))
const subscription_2 = obs$.subscribe(observer('B'))
const subscription_3 = obs$.subscribe(observer('C'))

subscription_1.add(subscription_2).add(subscription_3)

setTimeout(_=>{
    
    subscription_1.unsubscribe()

    // subscription_1.unsubscribe()
    // subscription_2.unsubscribe()
    // subscription_3.unsubscribe()
},3000);