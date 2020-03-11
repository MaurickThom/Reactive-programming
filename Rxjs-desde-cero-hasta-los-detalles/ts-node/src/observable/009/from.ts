import { of, asyncScheduler, Observable, from } from "rxjs";
import { delay, observeOn } from "rxjs/operators";
import { type } from "os";

const source1$ = new Observable(subscriber=>{
    subscriber.next('source$1 1 sec')
    subscriber.complete()
}).pipe(delay(1000))
const source2$ = new Observable(subscriber=>{
    subscriber.next('source$2 2 sec')
    subscriber.complete()
}).pipe(delay(2000))
const source3$ = new Observable(subscriber=>{
    subscriber.next('source$6 6 sec')
    subscriber.complete()
}).pipe(delay(6000))
const source4$ = new Observable(subscriber=>{
    subscriber.next('source$4 1 sec')
    subscriber.complete()
}).pipe(delay(1000))

console.log('inicio')
const ob = from([source1$,source2$,source3$,source4$,1])
                .pipe(observeOn(
                    asyncScheduler
                ))
                .subscribe(data=>{
                    if ( typeof data !== 'object' )
                        return console.log(data)
                    return data.subscribe(console.log)
                })
console.log('fin')