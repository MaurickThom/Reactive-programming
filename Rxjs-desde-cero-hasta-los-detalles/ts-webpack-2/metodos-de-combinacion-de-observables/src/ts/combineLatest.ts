import { timer, combineLatest, fromEvent } from "rxjs";
import { mapTo, scan, startWith, tap } from "rxjs/operators";

const firstTimer = timer(0, 1000)
const secondTimer = timer(500, 1000)

// const combinedTimers = combineLatest(
//     firstTimer,
//     secondTimer
// ).subscribe(console.log)


const template = /*html*/ `
    <div>
        <button id="red">Red</button>
        <button id="black">Black</button>
    </div>
    <div>Red: <span id="red-total"></span></div>
    <div>Black: <span id="black-total"></span></div>
    <div>Total: <span id="total"></span></div>
`

document.querySelector('body')?.insertAdjacentHTML("beforeend",template)

const redTotal = document.getElementById('red-total')
const blackTotal = document.getElementById('black-total')
const total = document.getElementById('total')

const addOneClick$ = (id:string) =>
  fromEvent(document.getElementById(id), 'click').pipe(
    // map every click to 1
    mapTo(1),
    // keep a running total
    scan((acc, curr) => acc + curr, 0),
    startWith(0) // se emitirá primero sin necesidad del click
  );

combineLatest(addOneClick$('red'), addOneClick$('black')).subscribe(
  ([red, black]: any) => {
    redTotal.innerHTML = red;
    blackTotal.innerHTML = black;
    total.innerHTML = red + black;
  }
);