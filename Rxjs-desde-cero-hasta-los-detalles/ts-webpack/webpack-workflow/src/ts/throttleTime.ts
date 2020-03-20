import { throttleTime, 
        pluck, 
        distinctUntilChanged, 
        debounceTime} from 'rxjs/operators'
import { fromEvent, asyncScheduler } from 'rxjs'

const clicks$ = fromEvent(document,'click')

// throttle time : tiempo de aceleracion

// marbles diagrams
/**


    abc----d----e----f----ghi----j----k
    throttleTime(1000) lo que hace este operador es justo despues de la emision 
        ignorará cualquier emision despues de un segundo , luego de ese segundo 
        podra emitir el otro dato y nuevamente ignorar cualquier emision hasta
        que pase un sec y así hasta que termine el observable
    a----d----e----f----g---j----k
*/

clicks$.pipe(
    throttleTime(3000)
).subscribe(console.log)



const input = document.createElement('input')
document.querySelector('body')?.append(input)

const input$ = fromEvent(input,'keyup')

input$.pipe(
    debounceTime(1000),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe(console.log)


input$.pipe(
    throttleTime(1000,asyncScheduler,{
        leading:true, // primer elemento
        trailing:true // ultimo elemento
    }),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe(console.log)


// esto funcionará igual que un debounceTime
input$.pipe(
    throttleTime(400,asyncScheduler,{
        leading:false,
        trailing:true
    }),

    pluck('target','value'),
    distinctUntilChanged()
).subscribe(console.log)