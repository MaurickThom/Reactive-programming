import {of, from, forkJoin} from 'rxjs'
import { map, mergeMap } from 'rxjs/operators'
/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 * Camina Mucho 100$
 */
(() =>{


    const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa','Camina MuCho 100%'];
    const capitalizar = (nombre: string) =>
        nombre.replace(
            /[a-zA-Z]\S*/g,
            txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );

    // Cambiar este FOR OF, por un observable y capitalizar las emisiones
    // for( let nombre of nombres ) {
    //     console.log( capitalizar(nombre) )
    // }

    // primera forma
    // of(...nombres)
    // .pipe(
    //     map(capitalizar)
    // ).subscribe(console.log)

    // segunda forma
    // from(nombres).pipe(
    //     map(capitalizar)
    // ).subscribe(console.log)

    // tercera forma mas compleja , pero divertida
    of(nombres).pipe(
        mergeMap(
            names=>forkJoin(...names.map(name=>Promise.resolve(capitalizar(name))))
        )
    ).subscribe(console.log)
})();