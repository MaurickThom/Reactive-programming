// RxJS v6+
import { interval, fromEvent, of } from 'rxjs';
import { exhaustMap, tap, take, delay } from 'rxjs/operators';

const firstInterval = interval(1000).pipe(take(10));
const secondInterval = interval(1000).pipe(take(2));

const exhaustSub = firstInterval
    .pipe(
        exhaustMap(f => {
            console.log(`Emission Corrected of first interval: ${f}`);
            return secondInterval;
        })
    )
    .subscribe(s => console.log(s));
/*
    Output:
    Emission of first interval: 0
    0
    1
    Emission of first interval: 3
    0
    1
    Emission of first interval: 6
    0
    1
    Emission of first interval: 9
    0
    1

        REDUX

        @Effect()
        login$ = this.actions$.pipe(
            ofType(AuthActionTypes.Login),
            map((action: Login) => action.payload),
            exhaustMap((auth: Authenticate) =>
            this.authService
                .login(auth)
                .pipe(
                map(user => new LoginSuccess({ user })),
                catchError(error => of(new LoginFailure(error)))
                )
            )
        );

    
*/

const interval$ = interval(1000).pipe(take(5))

fromEvent(document,'click').pipe(
    exhaustMap(_=>interval$) // ignora todos los stream que ocurran cuando el stream actual este atuando
).subscribe(console.log)



const getNews = () => {
    console.log('New call to news API');

    return of('Latest news (...)' + new Date()).pipe(
        delay(4000)
    );
};

const news$ = fromEvent(document, 'click').pipe(
    exhaustMap(() => getNews())
);

news$.subscribe(news => {
    (<HTMLBodyElement>document.querySelector('body')).innerText = news
})