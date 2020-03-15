import { Subject, from, Observer, fromEvent } from "rxjs"
import { map, distinct, filter, toArray, first, debounceTime, distinctUntilChanged } from "rxjs/operators"

const txtUser = <HTMLInputElement> document.getElementById('textUser'),
    select = <HTMLSelectElement> document.getElementById('select'),
    result = <HTMLUListElement> document.getElementById('result')

txtUser.value = ``
result.innerHTML = ``
let valueSelect:string = select.value

interface IUser {type:string,name:string}
const users: IUser[] = [
    {
        type: 'heroe',
        name: 'Batman'
    },
    {
        type: 'heroe',
        name: 'Robin'
    },
    {
        type: 'villano',
        name: 'Joker'
    },
    {
        type: 'heroe',
        name: 'Iron Man'
    },
    {
        type: 'villano',
        name: 'Lex luthor'
    },
    {
        type: 'villano',
        name: 'Doctor Octopus'
    },
    {
        type: 'villano',
        name: 'Venom'
    },
    {
        type: 'Heroe',
        name: 'Spider man'
    },
    
]


const source$ = from(users)
const observer:Observer<any> = {
    next({type,name}){
        console.log("next -> {type,name}", {type,name})
        result.innerHTML=``
        const arr = users.filter(user=>user.type.toLowerCase()===type)
        const print = (user:IUser)=>result.innerHTML+=`<li>${user.name}</li>`
        if(!name || name==undefined){
            arr.map(print)
            return
        }
        arr.filter(user=>user.name.toLowerCase().startsWith(name)).map(print)

    },
    complete(){

    },
    error(err){
        console.log(err)
    }
} 

const endpoint_stream = fromEvent<any>(select, 'click').
    pipe(
        map(event  => event.target),
        filter(tag=>tag.tagName!=='SELECT'),
        map(tag=>tag.value),
        distinctUntilChanged()
    ).subscribe(value=>{
        valueSelect = value
        observer.next({type:value})
    })


const userType$ = source$
    .pipe(
        map(user=>user.type.toLowerCase()),
        distinct()
        // distinct(user=> user.type.toLowerCase())
    )

const sub$ = new Subject()
sub$.subscribe((type:any)=>{
    valueSelect = type
    observer.next({type})    
})
const subscriptionSubjec = userType$.pipe(
    first(),
    // map(user=>user.type)
).subscribe(sub$)

userType$
.subscribe(data=>{
        select.innerHTML+=`<option value="${data}">${data}</option>`
    })

const input$ = fromEvent<any>(txtUser,'keyup')
.pipe(
    debounceTime(500),
    map(tag=>tag.target.value.trim()),
    distinctUntilChanged()
).subscribe(value=>{
    observer.next({type:valueSelect,name:value})
})