import {interval,timer} from 'rxjs'


const source$ = interval(1000)

const observer = {
    next: (data:any) => console.log('next ',data),
    complete : () => console.log('complete')
}

const today5 = new Date()

const second = today5.getSeconds() + 5
today5.setSeconds( second )
console.log("today5.getSeconds()", today5.getSeconds())

// emitirá 5 segundos despues en un margen de error de 1 o 2 segundos
// ya que el tiempo es de tiempo de ejecución mas los 5 segundos

const time$ = timer(today5) // emite valores despues de los segundos que tiene today5 y como no tiene un intervalo
                            // solo emitirá cero
                            // pero si le ponemos que empieze despues de a y que emita cada b tiempo
                            // time(1000,2000) le decimos que emita despues de 1 sec y que los valores tengan intervalos de 2 sec

                            
                            
console.log('start');
// source$.subscribe(console.log)
// time$.subscribe(observer)
timer(0,2000).subscribe(observer) // al observable se le asigna el macrotask
console.log('end');

