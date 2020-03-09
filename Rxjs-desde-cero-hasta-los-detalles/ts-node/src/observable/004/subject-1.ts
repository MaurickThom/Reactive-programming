import {Observable,Subject, Observer, Subscriber} from 'rxjs'

const observerTag = (tag:string):Observer<number> =>({
    next(data){
        console.log(tag," next -> data", data)
    },
    error(err){
        console.log(tag," error -> err", err)
    },
    complete(){
        console.log(tag," complete");
    }
})

const observer:Observer<number> = {
    next(data){
    console.log("next -> data", data)
    },
    error(err){
        console.log("error -> err", err)
    },
    complete(){
        console.log("complete");
    }
}

const interval$ = new Observable<number>((subscriber:Subscriber<number>)=>{
    const intervalId = setInterval(_=>{
        subscriber.next(Math.random())
        console.log('interval')
    },500)
    return () => {
        console.log('clearInterval')
        clearInterval(intervalId)
    }
})

// unicast
const subscriptionA = interval$.subscribe(observerTag('A'))
const subscriptionB = interval$.subscribe(observerTag('B'))

// multicast
const subject$ = new Subject<number>()
const subscriptionSubject = interval$.subscribe(subject$) // observa un numero random , obtiene el numero random luego los emite a los que se subscribieron a el
subject$.subscribe(observerTag('C'))
subject$.subscribe(observerTag('D'))

// subscriptionA
//     .add(subscriptionB)
//     .add(subscriptionSubject)

setTimeout(_=>{
    // subscriptionA.unsubscribe()
    subscriptionA.unsubscribe()
    subscriptionB.unsubscribe()
    subject$.next(2)
    subject$.complete() // si hago esto el interval seguirá ya que es el subject es el que termina mas no los intervals
                        // que tienen los observers que estan dentro del subject y es necesario luego el unsubscribe del subscription del subject
    subscriptionSubject.unsubscribe()
    

},2000)

/**
 * Cuando la data es producida por el observable es sí misma es considerado un "cold observable"
 * pero cuando la data es producida fuera del observable es llmada "hot observable"
 * https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339
 * 
 */






