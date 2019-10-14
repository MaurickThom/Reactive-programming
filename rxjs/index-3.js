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

const {concat,interval,range,operators,from,of} = rxjs
const {take,
        pluck,
        groupBy,
        map,
        toArray,
        mergeMap,
        scan,
        tap,
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

// switchMap

// forkJoin
