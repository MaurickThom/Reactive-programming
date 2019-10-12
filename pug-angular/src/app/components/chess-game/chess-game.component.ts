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
        ),
        )
        map()
  }

}
