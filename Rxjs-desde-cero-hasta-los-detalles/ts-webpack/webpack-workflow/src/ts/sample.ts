import { sample } from "rxjs/operators";

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

interval$   1234-------------3434112-----------------3---
click$      ---e---------------e-------------e-------e---



            ---4---------------3---------------------3----
 */