// distinctUntilChanged emitirá si el stream anterior es distinto al actual

import { from, of } from "rxjs";
import { distinctUntilChanged, distinct, distinctUntilKeyChanged } from "rxjs/operators";

const source$ = from([1,2,3,4,5,1,3,3,5,6,7,7,'7'])

source$.pipe(
    distinctUntilChanged()
).subscribe(console.log) // emitira solo 1 , 2 , 3 , 4 , 5 ,1, 3, 5, 6, 7 , '7'


interface Person {
    age: number,
    name: string
 }
  
 of<Person>(
     { age: 4, name: 'Foo'},
     { age: 7, name: 'Bar'},
     { age: 5, name: 'foo'},
   ).pipe(
     distinct((p: Person) => p.name.toLowerCase()),
   )
   .subscribe(x => console.log(x));
   // displays:
    // { age: 4, name: 'Foo' }
    // { age: 7, name: 'Bar' }

    of<Person>(
        { age: 4, name: 'Foo'},
        { age: 7, name: 'Bar'},
        { age: 5, name: 'Foo'},
        { age: 6, name: 'Foo'},
      ).pipe(
        distinctUntilChanged(
            (last: Person, curr: Person) => last.name.toLowerCase() === curr.name.toLowerCase()),
      )
      .subscribe(x => console.log(x));
     
    // displays:
    // { age: 4, name: 'Foo' }
    // { age: 7, name: 'Bar' }
    // { age: 5, name: 'Foo' }

    of<Person>(
        { age: 4, name: 'Foo'},
        { age: 7, name: 'Bar'},
        { age: 5, name: 'Foo'},
        { age: 6, name: 'Foo'},
      ).pipe(
        distinctUntilKeyChanged('name'),
      )
      .subscribe(x => console.log(x));
     
    // displays:
    // { age: 4, name: 'Foo' }
    // { age: 7, name: 'Bar' }
    // { age: 5, name: 'Foo' }