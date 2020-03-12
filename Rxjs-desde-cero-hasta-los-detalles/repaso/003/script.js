const {range,fromEvent,operators,from} = rxjs
const { map,pluck,mapTo } = operators


const keyUp$ = fromEvent(document,'keyup')

keyUp$.subscribe(console.log)

// operador map transforma el stream original en uno nuevo
const keyupCode$ = keyUp$.pipe(
    map( event=>event.key )
)
// operador mapTo , emite de manera constante un cierto valor indicado a lo largo del stream
const keyupMapTo$ = keyUp$.pipe(
    mapTo('Tecla Presionada')
)

// operador pluck : lo que hará es seleccionara la propiedad a emitir del stream
// ojo para poder obtener la propiedad tenemos que saber la profundidad del valor
/**
 * 
    Ejemplo : 
    const source$ = from([
        {name:'thom',age:21,obl:{
            a:'1',
            b:'2',
            sub:{
                c:'3'
            }
        }},
        {name:'carlos',age:21,obl:{
            a:'0',
            b:'1',
            sub:{
                c:'2'
            }
        }},
        {name:'pepe',age:21}
    ])

    source$.pipe(
        pluck('name')
    ).subscribe(console.log) // thom , carlos ,pepe

    source$.pipe(
        pluck('obl','a') // 1 , 0
    )

    source$.pipe(
        pluck('obl','sub') // {c:3} , {c:2}
    )
    source$.pipe(
        pluck('obl','sub','c') // 3 , 2 
    )
    
 */

const keyupPluck$ = keyUp$.pipe(
    pluck('target', 'baseURI') // sacar, arrancar
);

const source$ = from([
    {name:'thom',age:21,obl:{
        a:'1',
        b:'2',
        sub:{
            c:'3'
        }
    }},
    {name:'carlos',age:21,obl:{
        a:'0',
        b:'1',
        sub:{
            c:'2'
        }
    }},
    {name:'pepe',age:21}
]).pipe(
    pluck('obl','sub')
).subscribe(console.log)

const subs1 = keyupCode$.subscribe( console.log )
const subs2 = keyupMapTo$.subscribe( console.log )
const subs3 = keyupPluck$.subscribe( console.log )