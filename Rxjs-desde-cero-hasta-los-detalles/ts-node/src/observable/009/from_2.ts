import { from, of } from "rxjs"
// el from recibe : un array que puede ser de cualquier tipo
// tambien puede recibir elementos independientes pero solo uno y estos son
// promesas , obsevables , iteradores
import fetch from 'node-fetch'

function* myGenerator(){
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
    yield 6
}

const iterable = myGenerator();

const source$ = from(iterable)

console.log('hola');

source$.subscribe(console.log);
from('asdasd').subscribe(console.log);


// (async ()=>{
//     for await (let number of iterable){
//         console.log(number)
//     }
// })()

const obs$ = from(fetch('https://api.github.com/users/MaurickThom'))
obs$.subscribe(async response =>{
    // console.log("response", response)
    const data = await response.json()
    console.log("data", data)
})

console.log('fin hola');
