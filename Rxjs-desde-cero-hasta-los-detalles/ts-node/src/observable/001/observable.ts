import {
    Observable,
    Observer, 
    Subscriber, 
    Subscription,
    Subject
} from 'rxjs'

// const obser$:Observable<string> = Observable.create(
//     (observer:Observer<string>)=>observer.next('hola')
// )

const obs$ = new Observable<string>((subscriber)=>{
    subscriber.next('hola')
    subscriber.next('mundo')

    const obj =<any> undefined

    obj.name = "thom"

    subscriber.complete()
    subscriber.next('hola mundo')
})

// diferencia entre un subscriber y un observer
/**
 * Un subscriber hereda de una clase Subcription e implementa un Observer
 * class Subscriber extends Subscription implements Observer {}
 * Por lo qué a la hora de crear un observable adminite un subscriber y un observer
 * Observable.create((observer_subscriber: Subscriber | Observer))
 * new Observable((observer_subscriber: Subscriber | Observer))
 * 
 * - Observer es una simple interfaz con metodos next error y complete
 * - un Subscripber es un clase que hereda de una subscription(que es lo que retorna la subscripcion de un observable)
 *  ademas implementa un observer por que lo que se puede deducir que el tipo de argumento que recibe
 *  no es la generalizacion como puede ser un observer o un subscription sino es un subscriber (recueda thom) 
 */

obs$.subscribe(<Subscriber<string>>{
    next : data => console.log('next ' , data),
    complete : () => console.info('complete'),
    error : err => console.warn('error => ',err) 
})

// obs$.subscribe(<Observer<string>>{
//     next : data => console.log('next ' , data),
//     complete : () => console.info('complete'),
//     error : err => console.warn('error => ',err) 
// })


/** Plus
 * 
 * Flowable (RxJava)
 * 
 */