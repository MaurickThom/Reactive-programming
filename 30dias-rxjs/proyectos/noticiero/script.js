const {Observable,Subject,operators,from,of,fromEvent,combineLatest} = rxjs
const {  map,filter,scan,mapTo ,distinct,pluck,take,repeat,withLatestFrom} = rxjs.operators


// https://rxjs-dev.firebaseapp.com/api/operators/repeat
// https://medium.com/@martinkonicek/rx-combinelatest-vs-withlatestfrom-ccd98cc1cd41
// https://medium.com/ng-gotchas/combinelatest-vs-withlatestfrom-77bf4f01c64f
// https://www.learnrxjs.io/learn-rxjs/operators/combination/withlatestfrom
// https://rxjs-dev.firebaseapp.com/api/operators/withLatestFrom
// a.withLatestFrom(b) a combina con el ultimo de b

const _days = document.getElementById('weekDays')
const day$ = fromEvent(_days,'click')
                .pipe(
                    pluck('target'),
                    filter(target=>target.nodeName==='BUTTON'),
                    pluck('innerText')
                )

const _newsPapers =  document.getElementById('newspapers')

const newsPapers$ = fromEvent(_newsPapers,'click')
                .pipe(
                    pluck('target'),
                    filter(target=>target.nodeName==='BUTTON'),
                    pluck('innerText'),
                    distinct(),
                    scan((acc,curr)=>acc.concat(curr),[])
                )

const _next = document.getElementById('next')
const sendNews = fromEvent(_next,'click').pipe(
    mapTo(true)
)


const deliveryMan$ = combineLatest(
    day$,newsPapers$,sendNews
).pipe(
    map(([day,newsPapers,send])=>({day,newsPapers}))
)

const thom = deliveryMan$.pipe(
    filter(order=>order.day==='Domingo' && order.newsPapers.find(
        newpaper=>newpaper === 'ABC'
    )),
    take(1),
    repeat()
)


const erick = sendNews.pipe(
    withLatestFrom(day$,newsPapers$),
    map(([send,day,newsPapers])=>({send,day,newsPapers}))
).subscribe(console.log)

thom.subscribe(console.log)

// const thomSub = () => {
//     thom.subscribe({
//         next : data => console.log(data),
//         complete: _ => thomSub()
//     })
// }
// thomSub()