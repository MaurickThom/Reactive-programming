import './index.pug'
import './scss/style.scss'
import './img/clock.png'
// import './ts/clock'
import { fromEvent, Observer, interval } from 'rxjs'
import { tap, first, map, takeWhile, takeUntil, skip, throttleTime } from 'rxjs/operators'
// import './ts/status-bar'
// import './ts/reduce'
// import './ts/scan'
// import './ts/scanRedux'
import './ts/subject-example'

const click$ = fromEvent<MouseEvent>(document,'click')
click$.pipe(
    tap(()=>console.log('tap')),
    first<MouseEvent>(event=>event.clientX >= 150 ),
    map(ob=>({x:ob.clientX,y:ob.clientY}))
)
.subscribe(<Observer<any>>{
    next(data){
        console.log(data)
    },
    complete(){
        console.log('complete')
    }
})
click$.pipe(
    map(({x,y})=>({x,y})),
    takeWhile(({y})=>y <= 150,true)
)
.subscribe({
    next(data){
        console.log(data)
    },
    complete(){
        console.log('complete')
    }
})

// hasta que un obervable emita takeUntil

const button =  document.createElement('button')
button.innerHTML = 'Detener timer'

document.querySelector('body')?.append(button)

const counter$ = interval(1000)
const clickBtn$ = fromEvent(button,'click').pipe(
    tap(()=>console.log('tap antes del skip')),
    skip(1), // ignorará el primer stream , en este caso el primer click
    tap(()=>console.log('tap despues del skip')),
)

counter$.pipe(
    takeUntil(clickBtn$) // mantener hasta que el observable emita un evento
).subscribe({
    next : val => console.log(val),
    complete : ( )=>console.log('complete')
})

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
interval(500)
.pipe(
    throttleTime(1000)
)
.subscribe(console.log)

