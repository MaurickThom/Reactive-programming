import { mergeMap, map, take, takeUntil } from "rxjs/operators";
import { interval, fromEvent, of } from "rxjs";

const click$ = fromEvent(document,'click').pipe(
    mergeMap(val=>interval(1000))
).subscribe(console.log)



of('a','b','c').pipe(
    mergeMap(
        letter=>interval(1000).pipe(
            map(num=>letter + num),
            take(3)
        )
    )
).subscribe(console.log)


fromEvent(document,'mousedown').pipe(
    mergeMap(_=>interval()
        .pipe(
            takeUntil(fromEvent(document,'mouseup'))
        )
    )
).subscribe(console.log)