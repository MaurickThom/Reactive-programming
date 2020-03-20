import { auditTime, tap, sampleTime, map } from "rxjs/operators";
import { fromEvent } from "rxjs";

// parecido al sampleTime

const click$ = fromEvent<MouseEvent>(document,'click')

click$.pipe(
    map(({x,y})=>({x,y})),
    tap(val=>console.log('auditTime ',val)),
    auditTime(2000),
).subscribe(console.log)


click$.pipe(
    map(({x,y})=>({x,y})),
    tap(val => console.log('sampleTime ',val)),
    sampleTime(2000),
).subscribe(console.log)