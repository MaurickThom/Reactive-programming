import { Component, OnInit } from '@angular/core';
import {interval,timer} from 'rxjs'
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-intervaltimer',
  templateUrl: './intervaltimer.component.html',
  styleUrls: ['./intervaltimer.component.scss']
})
export class IntervaltimerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const counter = timer(1000)
    // const counter = interval(1000) // esto se convierte en una variable observable
    // setTimeOut === timer
    // para poder observar este observable me tengo que suscribir
    counter
    .pipe(
      take(4)
    )
    .subscribe(n=>console.log(`cada tantos ${n} segundos`))


  }

}
