import { Component, OnInit } from '@angular/core';
import { fromEvent ,timer} from 'rxjs';
import { tap } from 'rxjs/operators';
import {mapTo,share} from 'rxjs/operators'
import {Subject} from 'rxjs'

@Component({
  selector: 'app-cs-tap',
  templateUrl: './cs-tap.component.html',
  styleUrls: ['./cs-tap.component.scss']
})
export class CsTapComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let subject = new Subject<>()

    const clicks = fromEvent(document,'click')
    // .subscribe({
    //   next:(event)=>console.log(event),
    //   error:()=>console.log('error')
    //   })
      clicks.pipe(
        tap(event=>console.log(`Procesando ${event}`),
        err=>console.log(err),
        ()=>console.log(`Completado`))
      ).subscribe(console.log)
  }

  func_share(){
    // const timer$ = timer(1000)
    // const obs = timer$.pipe(
    //   tap()
    // )
  }

}
