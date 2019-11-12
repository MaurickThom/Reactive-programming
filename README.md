# **Reactive-programming**

## ¿Qué es?

Es un paradigma enfocado en el trabajo con flujos de datos `(Stream)` de manera asincrona. Un Stream es una secuencia de eventos ordenados en el tiempo.Puede emitir tres cosas diferentes : un valor , un error y una señal de `<<completado>>`. En otras palabras es un flujo constante de datos.

Se captura estos eventos emitidos de forma asincrona, definiendo una función que se ejecutará cuando se emite un valor , otra función cuando se emite un error y otra se emite cuando se completa. La `escucha` **del** Stream se le conoce como `suscripcion`.
Las funciones que estamos definiendo son `observers`. El Stream es el sujeto `Subject que tambien es un Observable`.

## **¿Qué es RectiveX ?**

Una API para la programación asincrona con un flujo de observables

````javascript

    /* Get stock  */
    const subscription = getAsyncStockData()
    .filter(quote => quote.price > 30)
    .map(quote => quote.price)
    .subscribe(
        price => console.log(`Prices higher than $30: ${price}`),
        err => console.log(`Something went wrong: ${err.message}`)
    );

    /*acabamos */
    subscription.unsubscribe();

````

> *La programación reactiva es un paradigma basado en Stream de datos Observables*
> <br>*Se basa en un centralizador de contenido que entiende como enviar los datos*
> <br>*Uno se suscribe a un flujo constrante de datos (Stream) || (Evento)*
> <br> Es un paradigma para operar con flujos de datos o stream asincronos
> <br> Un Stream es un flujo de datos , que es una secuencia de eventos asincronos ordenados en el tiempo

Tiene dos objetivos principales:

- Propagar los cambios que ocurren dentro de la variables del sistema de manera reactiva
- Trabajar con el flujo asincronos de datos

## **Diferencia entre promesa y el Observable**

La mayor diferencia es en el control de los datos que se genera mediante un flujo `(Stream)`
en las promesas maneja solo un evento cuando una operación asincrona se completa , falla o esta en espera .
Y en segundo lugar un observable es un patron de diseño donde Angular lo usa con la libreria RxJS , esta libreria usa los observables en un flujo de datos y permite pasar cero o mas eventos donde se invoca un callback para cada evento.

Para javascript un Observable se genera gracias a una colección de elementos asincronos (`amo esta parte <3`)

### **Conclusión**

Una promesa se resuelve en un solo valor de forma asincrónica ya sea rechazado (reject) , resulto (resolve) o en espera, un observable resuelve (o emite) múltiples valores de forma asíncrona (a lo largo del tiempo).

Ejemplos concretos:

> Promesa: Respuesta de una llamada Ajax

> Observable: Haga clic en eventos

## **RxJS**

Esta libreria usa un set de funciones asincronas y eventos que utilizan una secuencia de observables y operadores de consulta.

> *RxJS, nos permite representan flujos de datos asíncronos con Observables, consultar los flujos de datos asíncronos utilizando los operadores y parametrizar la concurrencia en los flujos de datos asíncronos usando Schedulers. En pocas palabras, RxJS = Observables + Operadores + Programadores(schedulers).*

> *[*Example Pattern Observable*](https://gist.github.com/MaurickThom/c422815b5ccbeded727bad0dd4a4c3fc)*

> *[*Code*](https://github.com/MaurickThom/Reactive-programming/blob/master/001/rxjs1/src/app/app.component.ts)*

> *[*Rx Visualizer*](https://rxviz.com)*

> *[*RxMarbles*](https://rxmarbles.com/#from)*

## **Subject**

Un `subject` es una clase especializada de observable cuya función es el detectar los cambios y emitirlos de forma multicast.
Mientras que un simple observable es unicast, es decir que cada observador suscrito posee una ejecuccion independiente del observable.

Internamente un subject se suscribe a un observable simple

````javascript
    observable.subscribe(subject)
````

> *Los Subjects son como EventEmitters: mantienen un registro de muchos listeners.*

Internamente el Subject , `subscribe` no invoca un flujo , solamente registra el observador dado en una lista de observers.
Ahora cada `subject` es un observer y contiene los metodos necesarios para el analisis del flujo asincrono

- next
- err
- complete

### **Tipos de Subjects**

.

````javascript

    const subject = new Rx.Subject()

    subject.subscribe({
        next:value=>console.log(`Observer A ${value}`)
    })

    subject.subscribe({
        next:value=>console.log(`Observer B ${value}`)
    })
    
    // subject.next(1) // esto recien detectara un cambio

    const arr = [1,2,3,4,5]

    const observableOf$ = Rx.Observable.of(...arr)
    const observableFrom$ = Rx.Observable.from(arr)

    const subscription = observableOf$.subscribe(subject) // un subcription es un objecto que representa un objeto desechable
    const childSubscription = observableFrom$.subscribe(subject)

    subscription.add(childSubscription)

    setTimeout(()=>{
        subscription.remove(childSubscription);
        subscription.unsubscribe()
    }, 1000)

````

En conclusión un subject actua como un Observable y un Observer gracias a los sistemas de pull
o push que nos ofrece para poder recibir o enviar la data

## **Operators**

Los operadores nos permiten el manejo de eventos asincronos , estos operadores estan agrupados en diferentes categorias .

**Categorias :**

- Creation
- Join Creation
- Transformation
- Filtering
- Join
- Multicasting
- Error handling
- Utility
- Conditional and Boolean
- Mathematical and Aggregate 

Los operadores Multicast `ejm : Subject` en realidad lo que hace es que los observers se suscriben a un sujeto subyacente , y el sujeto se suscribe a la fuente Observable
Estos devuelven un Observable que se parece a un Observable normal, pero funciona como un Subject cuando se trata de susbribirse.

## **NgRx**

.

## *Referencias*

- [*RxJS - 1*](https://www.adictosaltrabajo.com/2017/11/14/programacion-reactiva-uso-de-la-libreria-rxjs/)
- [*Promise vs Observable 1*](https://es.stackoverflow.com/questions/74930/angular-diferencia-entre-observable-y-promise)
- [*Promise vs Observable 2*](https://www.arquitecturajava.com/promise-vs-observable-en-javascript/)
- [*30 Dias de RxJS*](https://medium.com/@jorgeucano/30-días-con-rxjs-día-1-e911e68f6063)
- [*Angular in Depth*](https://blog.angularindepth.com/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0)
- [*Angular*](https://www.concretepage.com/angular/)
- [*Operator Tap*](https://www.concretepage.com/angular/angular-rxjs-tap)
- [*Operators and Functions*](https://blog.angularindepth.com/mastering-rxjs-operators-and-functions-that-can-bite-you-when-you-dont-expect-cb2047cf5d4c)
- [*reactive programming*](https://pablomagaz.com/blog/programacion-reactiva-con-rxjs)
- [*Subjects*](https://pablomagaz.com/blog/rxjs-subjects-que-son-como-funcionan)
