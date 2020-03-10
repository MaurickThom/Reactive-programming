import { range,of,asyncScheduler } from 'rxjs';

const source$ = range(1,10,asyncScheduler)

console.log('inicio');
source$.subscribe(console.log)
console.log('fin');

