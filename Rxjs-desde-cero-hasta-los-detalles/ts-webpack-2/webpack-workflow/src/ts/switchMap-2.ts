import { interval } from "rxjs";
import { take, switchMap, map } from "rxjs/operators";

const url = 'https://httpbin.org/delay/1?arg='
/**
 * https://medium.com/@nicowernli/diferencias-entre-map-flatmap-y-switchmap-en-rxjs-64662e90f701
 * https://medium.com/@luukgruijs/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff
 * https://pablomagaz.com/blog/combinando-observables-en-rxjs
 */

const long$ = interval(1000).pipe(take(4));
const short$ = interval(500).pipe(take(4));

long$.pipe(
    switchMap(
        long => short$
            .pipe(
                map(short => console.log({ long, short }))
            )
    )
).subscribe();