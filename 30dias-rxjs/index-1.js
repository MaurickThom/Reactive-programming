const {tap,map,filter,scan} = rxjs.operators
const {of,Observable} = rxjs
const clicks = rxjs.fromEvent(document,'click')
const counts = clicks.pipe(
    rxjs.operators.scan(count=>count+1,0)
)
counts.subscribe(console.log)

const position = clicks.pipe(
    tap(
        event=>console.log(`Process ${event}`)
    ), // este operador lo que hará es realizar un efecto secundario
                        // para cade fuente Observable, pero retornará un Observable que sea 
                        // identico a la fuente
    map(event=>event.clientX),
    scan((acc,curr)=>acc+curr,0)
)

position.subscribe(console.log)



