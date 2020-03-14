import {from, interval} from 'rxjs'
import {reduce, take, tap} from 'rxjs/operators'

from([1,2,3,4]).pipe(
    reduce((acc,curr)=>{
        return acc +curr
    },0)
).subscribe(console.log)


interval(500).pipe(
    take(6),
    tap(num=>console.log('tap ',num)),
    reduce((acc,curr)=>acc+curr,0)
).subscribe(console.log)