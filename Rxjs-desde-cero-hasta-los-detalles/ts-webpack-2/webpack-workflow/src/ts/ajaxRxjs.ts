import { ajax } from 'rxjs/ajax'
import {map,pluck, catchError} from 'rxjs/operators'
import {of, Observable} from 'rxjs'


const obs$ = ajax('https://.me/api/')
    .pipe(
        catchError(error => {
            return of(error)
        }),
        pluck('response','results'),
    )

obs$.subscribe({
    next: data=> console.log(data),
    error:(err:Observable<any>)=>err.subscribe(console.log)
})

const obs1$ = ajax(`https://api.github.com/404`).pipe(
    map(userResponse => console.log('users: ', userResponse)),
    catchError(error => {
    console.log('error: ', error);
    return of(error);
    })
).subscribe(console.log)
