import { asyncScheduler, of } from "rxjs";
import {observeOn} from 'rxjs/operators'

// Scheduler (planificador)

/**
 * Lo que hara es controlar al momento de iniciar la subscripcion y al momento de notificar a los observer
 * ya que Scheduler debe agendar estos llamados estableciendo en los observables el tipo de task que este formara
 *  parte, para que asi puedan establecer el momento en el que debe actuar
 */


// https://medium.com/@roliver_javier/que-es-un-scheduler-en-rxjs-dd2c93f28c9e
// https://blog.insiderattack.net/promises-next-ticks-and-immediates-nodejs-event-loop-part-3-9226cbe7a6aa
// https://rxjs-dev.firebaseapp.com/guide/scheduler
// https://blog.insiderattack.net/event-loop-and-the-big-picture-nodejs-event-loop-part-1-1cb67a182810
// https://javascript.info/event-loop

const source$ = of(1,2,3).pipe(
    observeOn(asyncScheduler) // Reemite pero esta ves con un planificador
)


console.log('start');

source$.subscribe(console.log)
console.log('end');