import { interval } from 'rxjs';
import { scan, take, map } from 'rxjs/operators';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4s
// 3
// 2
// 1
// 0

(() =>{

    const inicio = 5;
    const countdown$ = interval(inicio*100).pipe(
        // Usar los operadores necesarios
        // para realizar la cuenta regresiva
        map(val=>inicio-val),
        take(inicio)
    );
    

    // No tocar esta línea ==================
    countdown$.subscribe( console.log ); // =
    // ======================================


})();