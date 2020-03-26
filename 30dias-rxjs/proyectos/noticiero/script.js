const {Observable,Subject,operators,from,of,fromEvent,combineLatest} = rxjs
const {  map,filter,scan,mapTo ,distinct} = rxjs.operators

const _days = document.getElementById('weekDays')
const day$ = fromEvent(_days,'click')
                .pipe(
                    map(event=>event.target),
                    filter(target=>target.nodeName==='BUTTON'),
                    map(button=>button.innerText)
                )

const _newsPapers =  document.getElementById('newspapers')

const newsPapers$ = fromEvent(_newsPapers,'click')
                .pipe(
                    map(event=>event.target),
                    filter(target=>target.nodeName==='BUTTON'),
                    map(button=>button.innerText),
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
).subscribe(console.log)