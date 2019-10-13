const clicks = rxjs.fromEvent(document,'click')
const counts = clicks.pipe(
    rxjs.operators.scan(count=>count+1,0)
)

const position = clicks.pipe(
    rxjs.operators.tap() // este operador lo que hará es realizar un efecto secundario
                        // para cade fuente Observable, pero retornará un Observable que sea 
                        // identico a la fuente
)


counts.subscribe(console.log)

