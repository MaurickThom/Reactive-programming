# **Curso Rxjs Udemy**

## **¿Por qué usar extensiones reactivas**

Para las notificaciones en tiempo real

### **¿Cúando usar Rx**

- Eventos en la interfaz del usuario
- Cuando es necesario notificar sobre cambios en un objeto
- comunicaciones por sockets
- cuando necesitamos trabajar con flujos de información (streams)

### **Piezas fundamentales**

- Observables
  - fuente de informacion (source)
  - puede emitir multiples valores,sólo uno o ninguno (unicast)
  - emitir errores
  - pueden ser infinitos,finitos
  - pueden ser sincronos y asincronos
- Subscribers (Observers)
  - se subscriben a un observable, es decir , estar pendiente de lo que realiza el obervable
  - consumen y observan la data del observables
  - pueden recibir los errores y eventos del observable
  - desconocen todo lo que se encuentra detrás del observable
- Operators
  - usados para transformar observables (map,group,scan ...)
  - filtrar observables (filter,district,skip,debounce, ...)
  - creacion de observables (ajax,from,of,interval,timer ...)
  - condificionales (find,isEmpty ...)
  - matematicos (count,max,min,reduce ...)
  - utilidades (do,delay ...)
  - error (...)
  - combinacion (...)

### **ReactiveX**

#### **Observer Pattern**

Es un patrón de diseño de software que define una dependencia del tipo uno a muchos entre objetos, de manera que
cuando uno de los objetos cambia sus estado, notifica este cambio a todos los dependientes

#### **Iterator Pattern**

En POO, el patrón iterador define una interfaz que declara métodos necesarios para acceder secuencialmente a un grupo
de objetos de una colección.

primero(),siguiente(),haymas() y elementoactual()


### **Programacion funcional**

Es un paradigma de programación que utiliza la programación imperativa y trabaja con funciones matemáticas y enfatiza
los cambios de estado sin alterar o sin mutar la data original .

## **Marble Diagrams**

.

## **Referencias**

- [**RxMarble**](https://rxmarbles.com/)
- [**Custom**](https://netbasal.com/creating-custom-operators-in-rxjs-32f052d69457)
- [**Operator Multicast**](https://netbasal.com/understanding-rxjs-multicast-operators-77b3f60af0a2)
- [**Pull and Push**](https://medium.com/javascript-everyday/switch-from-pull-to-push-based-approach-with-rxjs-731340a5c797)
- [**Pull and Push**](https://ncjamieson.com/understanding-publish-and-share/)
- [**Pull and Push**](https://medium.com/@thomasburlesonIA/push-based-architectures-with-rxjs-81b327d7c32d)
- [**hot vs cold Observables**](https://medium.com/@luukgruijs/understanding-hot-vs-cold-observables-62d04cf92e03)
- [**extra**](http://willtaylor.blog/rxjs-observables-hot-cold-explained/)
- [**RXJS**](https://www.mmfilesi.com/blog/series/rxjs/)