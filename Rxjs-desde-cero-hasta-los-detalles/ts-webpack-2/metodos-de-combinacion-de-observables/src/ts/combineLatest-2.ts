import { fromEvent,combineLatest, from, of } from "rxjs";
import { pluck, map, filter, debounceTime, startWith } from "rxjs/operators";

const keyup$ = fromEvent(document,'keyup')
const click$ = fromEvent(document,'click')

// combineLatest(
//     keyup$,
//     click$
// ).subscribe(console.log)

const input1 = document.createElement('input')
const input2 = document.createElement('input')

const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')


input1.placeholder = 'email@gmail.com'
input2.placeholder = '***************'

wrapper.append(input1,input2)
document.querySelector('body').append(wrapper)

// function delegate(wrapperSelector,elementSelector,eventName){
//     return fromEvent(document.querySelector(wrapperSelector),eventName)
//             .pipe(
//                 map((event:any)=>of(event.target.closest(elementSelector))),
//                 filter(data=>data !== null)
//             )
// }

// delegate('.wrapper','input','keyup')
// .subscribe(console.log)

const getInputStream = (element:HTMLElement) =>
    fromEvent<KeyboardEvent>(element,'keyup').pipe(
        pluck<KeyboardEvent,string>('target','value')
    )

combineLatest(
    getInputStream(input1),
    getInputStream(input2),
).pipe(
    debounceTime(500),
).subscribe(console.log)