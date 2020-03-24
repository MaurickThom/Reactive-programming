import { interval, fromEvent } from "rxjs";
import { take, switchMap, map, tap } from "rxjs/operators";

const url = 'https://httpbin.org/delay/1?arg='
/**
 * https://medium.com/@nicowernli/diferencias-entre-map-flatmap-y-switchmap-en-rxjs-64662e90f701
 * https://medium.com/@luukgruijs/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff
 * https://pablomagaz.com/blog/combinando-observables-en-rxjs
 */

const long$ = interval(1000).pipe(take(4));
const short$ = interval(500).pipe(take(4));

long$.pipe(
    switchMap( // a diferencia del mergeMap este mantiene solo un observable interno activo , es decir que las demas emisiones se completará ver ejemplo
        long => short$
            .pipe(
                map(short => console.log({ long, short }))
            )
    )
).subscribe();

/** Output
{ long: 0, short: 0 }
{ long: 1, short: 0 }
{ long: 2, short: 0 }

apartir de aquí el observable long terminará de emitir asi que este será el ultimoq que internamente switchMap tendrá
{ long: 3, short: 0 }

{ long: 3, short: 1 }
{ long: 3, short: 2 }
{ long: 3, short: 3 }
*/


const data = { 
    author: 'Jhon', 
    articles: [  
        { 
            id: 11, 
            category: 'music' 
        }, 
        { 
            id: 22, 
            category: 'movies' 
        }, 
        { 
            id: 33, 
            category: 'music' 
        } 
    ] 
}

const service = () => new Promise((resolve,reject) => 
    setTimeout(() => resolve(data) , 2000))

const click$ = fromEvent(document,'click')


click$
    .pipe(
        tap(_=>console.log('click')),
        switchMap(service)
    )
    .subscribe(console.log)