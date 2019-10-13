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
const {take,pluck,groupBy,map,toArray,mergeMap} = operators

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

const sourceGroupBy$ = of(1,2,3,4,5,6)
    .pipe(
        groupBy(item=>item%2===0),
        mergeMap(group => group.pipe(toArray()))
    )
    .subscribe(console.log)

//plunck : selecciona las propiedades que quiere emitir

const sourcePluck$ = from(USERS)
const examplePluck$ = sourcePluck$.pipe(
    pluck('jobs')
).subscribe(console.log)

// switchMap

// forkJoin
