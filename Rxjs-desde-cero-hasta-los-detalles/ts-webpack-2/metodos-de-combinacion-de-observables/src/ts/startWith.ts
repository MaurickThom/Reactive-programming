import { startWith, scan } from 'rxjs/operators';
import { interval, of } from 'rxjs';

//emit values in sequence every 1s
const source = interval(1000);
//start with -3, -2, -1
const example = source.pipe(startWith(-3, -2, -1));
//output: -3, -2, -1, 0, 1, 2....
const subscribe = example.subscribe(val => console.log(val));



const source1 = of('World!', 'Goodbye', 'World!');
//start with 'Hello', concat current string to previous
const example1 = source1.pipe(
  startWith('Hello'),
  scan((acc, curr) => `${acc} ${curr}`)
);
/*
  output:
  "Hello"
  "Hello World!"
  "Hello World! Goodbye"
  "Hello World! Goodbye World!"
*/
const subscribe1 = example1.subscribe(val => console.log(val));