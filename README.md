# **Reactive-programming**

## ¿Que és?

Es un paradigma enfocado en el trabajo con flujos de datos `(Stream)` de manera asincrona. Un Stream es una secuencia de eventos ordenados en el tiempo.Puede emitir tres cosas diferentes : un valor , un error y una señal de `<<completado>>`. En otras palabras es un flujo constante de datos.

Se captura estos eventos emitidos de forma asincrona, definiendo una función que se ejecutará cuando se emite un valor , otra función cuando se emite un error y otra se emite cuando se completa. La `escucha` **del** Stream se le conoce como `suscripcion`.
Las funciones que estamos definiendo son `observers`. El Stream es el sujeto `Subject que tambien es un Observable`.

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
> <br>*Uno se suscribe a un flujo constrante de datos (Stream) / (Evento)*

## **Diferencia entre promesa y el Observable**

La mayor diferencia es en el control de los datos que se genera mediante un flujo `(Stream)`
en las promesas maneja solo un evento cuando una operación asincrona se completa , falla o esta en espera .
Y en segundo lugar un observable es un patron de diseño donde Angular lo usa con la libreria RxJS , esta libreria usa los observables en un flujo de datos y permite pasar cero o mas eventos donde se invoca un callback para cada evento.

Para javascript un Observable se genera gracias a una colección de elementos asincronos (`amo esta parte <3`)


## **RxJS**

Esta libreria usa un set de funciones asincronas y eventos que utilizan una secuencia de observables y operadores de consulta.

> *RxJS, nos permite representan flujos de datos asíncronos con Observables, consultar los flujos de datos asíncronos utilizando los operadores y parametrizar la concurrencia en los flujos de datos asíncronos usando Schedulers. En pocas palabras, RxJS = Observables + Operadores + Programadores(schedulers).*

> *[*Example Pattern Observable*](https://gist.github.com/MaurickThom/c422815b5ccbeded727bad0dd4a4c3fc)*

> *[*Code*](https://github.com/MaurickThom/Reactive-programming/blob/master/001/rxjs1/src/app/app.component.ts)*

> *[*Rx Visualizer*](https://rxviz.com)*

> *[*RxMarbles*](https://rxmarbles.com/#from)*

## *Referencias*

- [*RxJS - 1*](https://www.adictosaltrabajo.com/2017/11/14/programacion-reactiva-uso-de-la-libreria-rxjs/)
- [*Promise vs Observable 1*](https://es.stackoverflow.com/questions/74930/angular-diferencia-entre-observable-y-promise)
- [*Promise vs Observable 2*](https://www.arquitecturajava.com/promise-vs-observable-en-javascript/)
