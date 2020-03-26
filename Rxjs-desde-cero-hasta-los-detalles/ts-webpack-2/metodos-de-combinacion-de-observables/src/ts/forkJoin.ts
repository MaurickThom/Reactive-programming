/**
 * https://rxjs-dev.firebaseapp.com/api/index/function/forkJoin
 * https://www.learnrxjs.io/learn-rxjs/operators/combination/forkjoin
 * https://blog.ng-classroom.com/blog/tips/fork-join/
 * 
 * a diferencia del combineLatest el forkJoin solo trabajara con stream finitos
 */

import { timer, of, forkJoin } from "rxjs";
import { ajax } from "rxjs/ajax";


const timer$ = timer(4000)
const of$ = of(1,2,3)
const promise$ = Promise.resolve(8)

forkJoin(of$,promise$,timer$)
    .subscribe(console.log)


forkJoin({
    foo: of$,
    bar: promise$,
    baz: timer$,
}).subscribe(console.log)


forkJoin([
    of$,
    promise$,
    timer$,
]).subscribe(console.log)


forkJoin(
    // as of RxJS 6.5+ we can use a dictionary of sources
    {
        google: ajax.getJSON('https://api.github.com/users/google'),
        microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
        users: ajax.getJSON('https://api.github.com/users')
    }
)
    // { google: object, microsoft: object, users: array }
    .subscribe(console.log);