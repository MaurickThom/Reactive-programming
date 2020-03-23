import {ajax} from 'rxjs/ajax'
import { Observer, from, fromEvent, of } from 'rxjs'
import { debounceTime, pluck, mergeMap, distinctUntilChanged, isEmpty, catchError } from 'rxjs/operators'

const url = 'https://api.github.com/search/users?q='
const input = document.createElement('input')

const orderList = document.createElement('ol')

const body = document.querySelector('body')

body?.append(input,orderList)

const observer:Observer<any> = {
    next:data=>{

    },
    complete: ()=>{

    },
    error:err=>{

    }
}

const ajaxFn$ = (user:string) => ajax({
    url:`${url}${user}`
})

fromEvent<MouseEvent>(input,'keyup').pipe(
    debounceTime(500),
    pluck<MouseEvent,string>('target','value'),
    distinctUntilChanged(),
    mergeMap(ajaxFn$),
    pluck('response','items'),
    catchError(err=>of(err)),
).subscribe(console.log)



/**
    https://pablomagaz.com/blog/combinando-observables-en-rxjs
 */