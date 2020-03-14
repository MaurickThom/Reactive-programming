import { from, interval } from 'rxjs'
import {scan, take} from 'rxjs/operators'


from([1,2,3,4,5,7,8]).pipe(
    scan((acc,curr)=>acc+curr,0)
).subscribe(console.log)
    
    
interval(500).pipe(
    take(6),
    scan((acc,curr)=>acc+curr,0)
).subscribe(console.log)