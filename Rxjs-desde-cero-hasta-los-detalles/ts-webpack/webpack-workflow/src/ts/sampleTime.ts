import { sampleTime } from "rxjs/operators";
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

*/




const click$ = fromEvent(document,'click')
