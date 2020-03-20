import { sampleTime, map } from "rxjs/operators";
import { fromEvent } from "rxjs";

// el sampleTime nos permite obtener el ultimo valor obtenido en un stream de datos en un
// intervalo de tiempo
// es decir que la subscripcion emitira cada tantos segundos el ultimo valor emitido
/**

--abc--d--fgh--ijk

--c---d---h---k

respuesta : emitirá c canda tantos segundos se le pase como parámetro luego pasado ese
segundo no emitirá nada hasta que haya otro stream


a-b--c--|---d------|fghijklm|m-------|

        c         d        m        m
-------->--------->-------->-------->
        1         1        1        1 : sec

se emite el ultimo dato en un tiempo determinado

*/

const click$ = fromEvent<MouseEvent>(document,'click')

// cada tramo que pase que me informe cual fue el ultimo evento que ocurrio en ese tramo de tiempo
click$.pipe(
    sampleTime(2000), // es mas eficiente tener el timer primero antes que haga la transformacion
    map(({x,y})=>({x,y})),
).subscribe(console.log)

