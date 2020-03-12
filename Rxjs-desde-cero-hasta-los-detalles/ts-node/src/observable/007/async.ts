// https://indepth.dev/rxjs-applying-asyncscheduler-as-an-argument-vs-with-observeon-operator/
import { asyncScheduler, Subscription } from "rxjs";

const greet = () => console.log('hello')
const greet_2 = (name:any) => console.log(`hello ${name}`)
const fn = ({a,b}:any) => console.log(a,b)
    
console.log('start')
// parecido al setTimeout
asyncScheduler.schedule(greet,5000) // que emitá el log luego de 5 sec
asyncScheduler.schedule(greet_2,5000,'thom') // que emita el log luego de 5 sec y que pase como parametro thom
asyncScheduler.schedule(fn,4000,{a:'1',b:'2'})

// parecido al setInterval
const subscription:Subscription = asyncScheduler.schedule(function (state){
    console.log("state", state)
    // segundo .- despues del primero luego se ejecutará esto de forma recursiva 
    this.schedule( <number>state + 1,1000) // y se reconfigura el intervalo y se comienza a llamar de manera recursiva

},3000,0) // primero .- aquí solo espera 3 sec pero solo se ejecutará una ves


// setTimeout(_=>{
//     subscription.unsubscribe()
// },6000)
// otra alternativa es 
asyncScheduler.schedule(()=>{
    subscription.unsubscribe()
},6000)


console.log('end')