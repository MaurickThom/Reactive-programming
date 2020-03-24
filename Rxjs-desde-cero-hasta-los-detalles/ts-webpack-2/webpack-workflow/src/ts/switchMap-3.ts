import {ajax, AjaxError} from 'rxjs/ajax'
import { Observer, from, fromEvent, of } from 'rxjs'
import { debounceTime, pluck, mergeMap, distinctUntilChanged, isEmpty, catchError, filter, tap, mapTo, switchMap, delay, map, switchAll } from 'rxjs/operators'

// const url = 'https://api.github.com/search/users?q='
const url = 'https://httpbin.org/delay/1?arg='
const input = document.createElement('input')

const orderList = document.createElement('ol')

const body = document.querySelector('body')

body?.append(input,orderList)

const ajaxFn$ = (user:string) => ajax({
    url:`${url}${user.trim()}`
})

// fromEvent<MouseEvent>(input,'keyup').pipe(
//     debounceTime(500),
//     pluck<object,string>('target','value'),
//     filter((data:string)=> data.trim() !== ''),
//     distinctUntilChanged(),
//     mergeMap(ajaxFn$), // map + megeAll(merge + flat)
//     pluck<object,object[]>('response','items'),
//     catchError((err:AjaxError)=>of(err)),
// ).subscribe(console.log)


fromEvent<MouseEvent>(input,'keyup').pipe(
    // debounceTime(500),
    pluck<object,string>('target','value'),
    filter((data:string)=> data.trim() !== ''),
    distinctUntilChanged(),
    switchMap(ajaxFn$),
    // mergeMap(ajaxFn$), // map + megeAll(merge + flat)
    // pluck<object,object[]>('response','items'),
    catchError((err:AjaxError)=>of(err)),
).subscribe(console.log)

const getData = (param:any) => {
    return of(`retrieved new data with param ${param}`).pipe(
      delay(1000)
    )
  }
  
//   // using a regular map
//   from([1,2,3,4]).pipe(
//     map(param => getData(param))
//   ).subscribe(val => val.subscribe(data => console.log(data)));
  
//   // using map and switchAll
//   from([1,2,3,4]).pipe(
//     map(param => getData(param)),
//     switchAll()
//   ).subscribe(val => console.log(val));
  
  // using switchMap
  from([1,2,3,4]).pipe(
    switchMap(param => getData(param))
  ).subscribe(val => console.log(val));
  