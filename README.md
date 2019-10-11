# **Reactive-programming**

## ¿Que és?

Es un paradigma enfocado en el trabajo con flujos de datos `(Stream)` de manera asincrona. Un Stream es una secuencia de eventos ordenados

> *La programación reactiva es un paradigma basado en Stream de datos Observables*
> <br>*Se basa en un centralizador de contenido que entiende como enviar los datos*

## **Diferencia entre promesa y el Observable**

La mayor diferencia es en el control de los datos que se genera mediante un flujo `(Stream)`
en las promesas maneja solo un evento cuando una operación asincrona se completa , falla o esta en espera .
Y en segundo lugar un observable es un patron de diseño donde Angular lo usa con la libreria RxJS , esta libreria usa los observables en un flujo de datos y permite pasar cero o mas eventos donde se invoca un callback para cada evento.

Para javascript un Observable se genera gracias a una colección de elementos asincronos (`amo esta parte <3`)

## *Referencias*

- [*RxJS - 1*](https://www.adictosaltrabajo.com/2017/11/14/programacion-reactiva-uso-de-la-libreria-rxjs/)
- [*Promise vs Observable 1*](https://es.stackoverflow.com/questions/74930/angular-diferencia-entre-observable-y-promise)
- [*Promise vs Observable 2*](https://www.arquitecturajava.com/promise-vs-observable-en-javascript/)
