import { take, concatMap, observeOn, merge, delay } from "rxjs/operators";
import * as rx from 'rxjs'
const interval$ = rx.interval(1000).pipe(take(3))

const letters$ = rx.of('x','y','z')

const vowels$ = rx.of('a','e','i')

rx.from([interval$,letters$,vowels$]).pipe(
    concatMap(data=>data)
).subscribe(console.log)

rx.fromEvent(document,'click').pipe(
    concatMap(_=>interval$)
).subscribe(console.log)


const getData = (param:any) => {
    const delayTime = Math.floor(Math.random() * 10000) + 1;
    return rx.of(`retrieved new data with params: ${param} and delay: ${delayTime}`).pipe(
        delay(delayTime)
    )
}

// using concatMap
rx.from([1, 2, 3 ,4]).pipe(
    concatMap(param => getData(param))
).subscribe(val => console.log('concatMap:', val))

// con esto se puede hacer  sm -- barras por cada imagen (3)

// ------ ------- ------
// https://angular-academy.com/rxjs-switchmap-concatmap-mergemap-exhaustmap/#exhaustmap