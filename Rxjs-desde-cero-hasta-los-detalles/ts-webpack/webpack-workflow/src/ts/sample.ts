import { sample } from "rxjs/operators";
import { interval, fromEvent } from "rxjs";

// el sample funciona con dos observables
/**

donde el primer observable sera el encargado de tener la fuente de datos
y emitira datos en cierto tiempo

el segundo observable sera el encargado que emita un valor del primer observable justo cuando
el segundo observable emita un dato
 */

/**
 * 
 * ejemplo

e === event

interval$   1234-------------3434112-----------------3-----
click$      ---e---------------e-------------e-------e-----



            ---4---------------3---------------------3----
 */

const interval$ = interval(500)
const click$ = fromEvent<MouseEvent>(document,'click')

interval$.pipe(
    sample(click$) // obtengo la muestra de interval al momento de que haga click siempre y cuando el interval haya emitido un dato
).subscribe(console.log)

/**
ejemplo con 5 seg

el timer aun no emite nada hasta 5 segundos y en ese tiempo antes de los 5 segundos 
se ejecuta un evento click no emitirá nada , luego de los 5 segundos emite un valor
pero no se mostrará nada hasta que obtenga un evento click , si hay un evento click emitirá un 
el dato emitido por el interval si doy otro evento click no mostrará nada ya que ya obtuve una muestra
de lo que habia emitido y solo podre ver otro dato hasta que el timer emita otro valor luego de 5 segundos

 */


