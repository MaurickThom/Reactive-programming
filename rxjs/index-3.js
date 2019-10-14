const USERS = [
    {
        name:'Thom',
        age:21,
        jobs:[
            {
                id:1,
                year:'2019',
                description:'FullStack Developer , my first job :3 ',
                startup:'Softhy'
            }
        ]
    },
    {
        name:'Angel',
        age:20,
        jobs:[
            {
                id:1,
                year:2015, // creo xd
                description:'Nose'
            },
            {
                id:2,
                year:2018,
                description:'PlazaVea'
            },
            {
                id:3,
                year:2019,
                description:'Mobile Developer',
                startup:'Softhy'
            }
        ]
    }
]
// concat : concatena multiples observables

const {concat,
        interval,
        range,
        operators,
        from,
        of,
        forkJoin,
        empty,// es un observable que se completa de inmediato
        merge,
        fromEvent} = rxjs

const {take,
        pluck,
        groupBy,
        map,
        delay,
        startWith,
        toArray,
        mergeMap,
        scan,
        mapTo,
        switchMap,
        tap,
        takeWhile,
        bufferTime} = operators

const timer$ = interval(500)
    .pipe(
        take(4)
    )
const range$ = range(1,10)

const result$ = concat(
    timer$,
    range$
)
// result$.subscribe(console.log)

// bufferTime : Recopila todo los datos transmitidos en cierto intervalos y luego los emite como un array
// Almacena valores de la fuente durante un tiempo específico bufferTimeSpan. A menos que se 
// proporcione el argumento opcional bufferCreationInterval, emite y restablece el buffer cada 
// bufferTimeSpan milisegundos. Si se proporciona bufferCreationInterval, este operador abre el 
// buffer cada bufferCreationInterval milisegundos y cierra (emite y restablece) el buffer cada 
// bufferTimeSpan milisegundos. Cuando se especifica el argumento opcional maxBufferSize, el 
// búfer se cerrará después de bufferTimeSpan milisegundos o cuando contenga elementos 
// maxBufferSize.


// const intervalBufferTime$ = interval(500)
// const buffer$ = intervalBufferTime$.pipe(
//     bufferTime(1000,5000) // cada 5 segundos emite lo que guardo hace un segundos
                            // en intervalos de 1/2 segundo 
// ).subscribe(console.log)



// groupBy : Agrupa observables según el valor proporcionado.

// const sourceGroupBy$ = of(1,2,3,4,5,6)
//     .pipe(
//         groupBy(item=>item%2===0),
//         mergeMap(group => group.pipe(toArray()))
//     )
//     .subscribe(console.log)

// ejemplo de fibonacci con Rx
// const interval$ = interval(500)
//         .pipe(
//             take(16),
//             scan(({prev,last})=>({prev:last,last:prev+last}),{prev:0,last:1}),
//             pluck('prev'),
//             groupBy(num=>Math.floor(Math.log10(num))),
//             mergeMap(group=>group.pipe(toArray())),
//         ).subscribe(console.log)



//pluck : selecciona las propiedades que quiere emitir

// const sourcePluck$ = from(USERS)
// const examplePluck$ = sourcePluck$.pipe(
//     pluck('jobs')
// ).subscribe(console.log)

// switchMap : Tiene las propiedades de map pero adiciona las propiedades poder interrumpir el mapeo 
// interrumpir un observable

// const click$ = fromEvent(document,'click')
// click$.pipe(
//     switchMap(()=>interval(1000))
// )
// .subscribe(console.log)

// ejemplo para switchMap

const remainingLabel = document.getElementById('remaining'),
    pauseButton = document.getElementById('pause'),
    resumeButton = document.getElementById('resume'),
    resetButton = document.getElementById('reset')


const interval$ = interval(1000)
    .pipe(
        mapTo(-1) // emitirá de manera constante un -1
    )

const pause = fromEvent(pauseButton,'click')
    .pipe(
        mapTo(false) // emitirá de manera constante un false
    )
const resume = fromEvent(resumeButton,'click')
    .pipe(
        mapTo(true) // emitirá de manera constante un true
    )
const reset = fromEvent(resumeButton,'click')
    .pipe(
        switchMap(()=>interval(1000))
    )

const timer = merge(pause,resume)
    .pipe(
        startWith(true), // esto dira que en nuestro flujo primero irá un true
        switchMap(value=>value?interval$:empty()),
        scan((acc,curr)=>(curr?curr+acc:acc),10),
        takeWhile(value=>value>=0)
    )
    .subscribe(value=>remainingLabel.innerHTML = value)


// forkJoin : operador de combinacion , pero solo emite las combinaciones de los ultimos
// datos de cada flujo

const fork$ = forkJoin(
    of('hola'),
    of('mundo').pipe(
        delay(1000),
        tap(console.log)
    ),
    interval(5000).pipe(
        tap(console.log),
        take(2)
    )
).subscribe(console.log)