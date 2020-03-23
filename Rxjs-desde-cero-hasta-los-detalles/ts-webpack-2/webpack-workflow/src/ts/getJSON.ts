import { ajax, AjaxResponse, AjaxError } from "rxjs/ajax";
import { of } from "rxjs";
import { catchError } from "rxjs/operators";

const url = 'https://httpbin.org/delay/1'

const catch_error = (res:AjaxError)=> of(res.message)

const obs1$ = ajax.getJSON(url,{
    'Content-Type':'application/json',
    'mi-token':'abc123'
}).pipe(catchError(catch_error))

const obs2$ = ajax({
    url,
    headers:{
        'Content-Type':'application/json',
        'mi-token':'abc123'
    }
}).pipe(catchError(catch_error))

obs1$.subscribe(console.log)
obs2$.subscribe(console.log)
