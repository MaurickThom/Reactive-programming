import { of, from, Observer, asyncScheduler } from "rxjs";

const arr:number[] = [1,2,3,4,5,6]
const source$ = of(...arr)
// ojo devuelve los datos de forma secuencia y SINCRONA

source$.subscribe(console.log)

const from$ = from(arr)

from$.subscribe(console.log)

// secuencial y sincrona
const obs$ = of([1,2],{a:1,b:2},()=>null,true,Promise.resolve(true))

// forma sincrona
console.log('Inicio');
obs$.subscribe(<Observer<any>>{
    next:data => console.log(data)
})
console.log('fin')

// forma asincrona

const source_of$ = of(1,2,3,asyncScheduler)

console.log('inicio')
source_of$.subscribe(console.log)
console.log('fin');

// scheduler (planificador)
// https://medium.com/@roliver_javier/que-es-un-scheduler-en-rxjs-dd2c93f28c9e
// https://blog.insiderattack.net/promises-next-ticks-and-immediates-nodejs-event-loop-part-3-9226cbe7a6aa
// https://rxjs-dev.firebaseapp.com/guide/scheduler
// https://blog.insiderattack.net/event-loop-and-the-big-picture-nodejs-event-loop-part-1-1cb67a182810
// https://javascript.info/event-loop

//  controlan cuando se inicia un subscripcion y cuando se publican las notificaciones ya que el debe agendar
// estos llamados estableciendo en los observables  el tipo de task que este formará parte (microtask o macrotask)
// para que así puedan establecer el momento en el debe actuar.






