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

const {concat,interval,range,operators} = rxjs
const {take} = operators

const timer$ = interval(1000)
    .pipe(
        take(4)
    )
const range$ = range(1,10)

const result$ = concat(
    timer$,
    range$
)
result$.subscribe(console.log)

// bufferTime

// groupBy

//plunck : selecciona las propiedades que quiere emitir

// switchMap

// forkJoin
