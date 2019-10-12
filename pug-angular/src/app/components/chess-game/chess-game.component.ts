import { Component, OnInit } from '@angular/core';

import {of,interval} from 'rxjs'
import {zip,map} from 'rxjs/operators'

/**
 * ZIP : COMBINA MULTIPLES OBSERVABLES PARA CREAR UN OBSERVABLE CUYOS VALORES SE CALCULAN
 * A PARTIR DE LOS VALORES , EN ORDEN , DE CADA UNO DE SUS OBSERVABLES DE ENTRADA
 *
 * FROM : CONVIERTE UNA MATRIZ, PROMESA O ITERABLE EN UN OBSERVABLE
 */


@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.scss']
})
export class ChessGameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const timer$ = interval(1000)
    const pieces$ = of('', '♞', '', '♞', '♘', '♞')
    const columns$ = of('e', 'c', 'g', 'd', 'e', 'f')
    const rows$ = of('4', '6', '4', '4', '2', '3')

    timer$.pipe(
      zip(
          pieces$,
          columns$,
          rows$
        ), // este zip al combinar los tres observables lo retornara de la siguiente manera
         // [indice: 1,pieces$-1,columns$-1,rows$-1]
        // [indice: 2,pieces$-2,columns$-2,rows$-2]
        // [indice: 3,pieces$-3,columns$-3,rows$-3]  ... y así
        map(([index,piece,column,row])=>`${index} .- ${piece},${column},${row}  `)
        )
    .subscribe(console.log)
  }

}
