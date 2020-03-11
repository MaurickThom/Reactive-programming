// https://indepth.dev/rxjs-applying-asyncscheduler-as-an-argument-vs-with-observeon-operator/
import { asyncScheduler, Subscription } from "rxjs";

const greet = () => console.log('hello')
const greet_2 = (name:any) => console.log(`hello ${name}`)

console.log('start')
asyncScheduler.schedule(greet,5000) // que emitá el log luego de 5 sec
asyncScheduler.schedule(greet_2,5000,'thom') // que emita el log luego de 5 sec y que pase como parametro thom

const subscription:Subscription = asyncScheduler.schedule(function (state){
    console.log("state", state)
    this.schedule( <number>state + 1,1000)
},3000,0) 


// setTimeout(_=>{
//     subscription.unsubscribe()
// },6000)
// otra alternativa es 
asyncScheduler.schedule(()=>{
    subscription.unsubscribe()
},6000)


console.log('end')