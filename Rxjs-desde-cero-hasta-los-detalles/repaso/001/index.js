const { Observable,Subject } = rxjs

// thom del futuro
// Un observable por defecto es unicast y un subject multicast,
// si quieres recordar la explicacion revisa tus apuntes


// UNICAST
console.log("Unicast");
const observable$ = Observable.create(observer=>{
    observer.next(Math.random())
})

// 1 subscriptor
observable$.subscribe(console.log) // numero 1

// 2 subscriptor
observable$.subscribe(console.log) // numero 2

// MULTICAST
console.log("Multicast");
const subject$ = new Subject()
// 1
subject$.subscribe(console.log) // numero 1

// 2
subject$.subscribe(console.log) // numero 1
subject$.next(Math.random())

console.log("Unicast & Multicast");

// unicast y multicast juntos
const _observable$ = Observable.create(observer=>{
    observer.next(Math.random())
})

const _subject$ = new Subject()
_subject$.subscribe(console.log)
_subject$.subscribe(console.log)

_observable$.subscribe(_subject$)
/**
 * explicacion : 
 * 
 * el observable es unicast (recordar que el subject funciona como observer y observable)
 * entonces el observable cuando alguien se subscribe su configuración por defecto es emitir
 * un número random y como hay solo un suscriptor solo envia un número pero por ejemplo si hubiera
 * en su lista de observadores [observer,subject,observer,observer,subject]
 * entonces al ser unicast cada uno de los elementos de la lista recibiría un elemento distindo [1,3,42,53,63,6...]
 * ok , ahora supongamos que al subject se le asigno el numero 56 , este subject ahora obtuvo 56 como
 * observer pero su función terminó , ahora actuará como observable emitiendo el mismo numero a sus lista interna
 * :)
 */