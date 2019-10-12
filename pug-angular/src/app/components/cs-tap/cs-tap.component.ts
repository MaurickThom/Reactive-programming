import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-cs-tap',
  templateUrl: './cs-tap.component.html',
  styleUrls: ['./cs-tap.component.scss']
})
export class CsTapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

}
