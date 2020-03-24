import { fromEvent, interval , asyncScheduler} from "rxjs";
import * as Rx from 'rxjs'
import { mergeMap, tap, switchMap, take,merge, observeOn} from "rxjs/operators";

const click$ = fromEvent(document, 'click')
const interval$ = interval(1000)

const mergeMap$ = click$.pipe(
    mergeMap(_ =>
        interval$.pipe(
            tap(val => console.log(val, ' mergeMap')),
        )
    )
)

const switchMap$ = click$.pipe(
    switchMap(_ =>
        interval$.pipe(
            tap(val => console.log(val, ' switchMap')),
        )
    )
)

// mergeMap$.pipe(
//     observeOn(asyncScheduler),
//     merge(switchMap$)
// ).subscribe()

const obsMerge$ = Rx.merge(mergeMap$,switchMap$).pipe(observeOn(asyncScheduler))
obsMerge$.subscribe()