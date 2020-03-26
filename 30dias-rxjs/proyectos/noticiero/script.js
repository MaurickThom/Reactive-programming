const {Observable,Subject,operators,from,of,fromEvent,combineLatest} = rxjs
const {  map,filter,scan,mapTo ,distinct,pluck,take} = rxjs.operators

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
    )),take(1)
)


const thomSub = () => {
    thom.subscribe({
        next : data => console.log(data),
        complete: _ => thomSub()
    })
}
thomSub()