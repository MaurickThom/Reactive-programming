import { fromEvent } from 'rxjs'
import {map} from 'rxjs/operators'
const progressBar = <HTMLDivElement> document.querySelector('.progress-bar')

// function que hará el calculo
function getPercentageScroll(event:any):number{
    const { scrollTop,scrollHeight,clientHeight } = event.target.documentElement
    return (scrollTop / (scrollHeight - clientHeight))*100
}

// console.log(progressBar);

// streams
const scroll$ = fromEvent(document,'scroll')

const progress$ = scroll$.pipe(
    map(getPercentageScroll)
)

progress$.subscribe(percentage=>{
    progressBar.style.width = `${percentage}%` 
})