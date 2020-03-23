import {ajax, AjaxError} from 'rxjs/ajax'
import { Observer, from, fromEvent, of } from 'rxjs'
import { debounceTime, pluck, mergeMap, distinctUntilChanged, isEmpty, catchError, filter, tap, mapTo } from 'rxjs/operators'

const url = 'https://api.github.com/search/users?q='
const input = document.createElement('input')

const orderList = document.createElement('ol')

const body = document.querySelector('body')

body?.append(input,orderList)

const ajaxFn$ = (user:string) => ajax({
    url:`${url}${user.trim()}`
})

fromEvent<MouseEvent>(input,'keyup').pipe(
    debounceTime(500),
    pluck<object,string>('target','value'),
    filter((data:string)=> data.trim() !== ''),
    distinctUntilChanged(),
    mergeMap(ajaxFn$), // map + megeAll(merge + flat)
    pluck<object,object[]>('response','items'),
    catchError((err:AjaxError)=>of(err)),
).subscribe(console.log)



/**
    https://pablomagaz.com/blog/combinando-observables-en-rxjs
 */