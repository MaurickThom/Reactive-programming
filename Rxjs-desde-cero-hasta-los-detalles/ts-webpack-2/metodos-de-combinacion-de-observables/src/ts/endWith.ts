import { of } from "rxjs";
import { startWith, endWith } from "rxjs/operators";

const source1 = of('World!');

source1.pipe(
    startWith('hello'),
    endWith('Goodbye')
).subscribe(console.log)