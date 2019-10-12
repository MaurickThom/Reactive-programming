import {  Component, OnInit } from '@angular/core';
import {fromEvent} from 'rxjs' // convertir una variable no observable atraves de un evento de javascript

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const el = document.getElementById('elemento')
    const mousemove = fromEvent(el,'mousemove')

    mousemove.subscribe((event:MouseEvent)=>{
      console.log(`MouseEvent ${event.clientX}`)
    })
  }

}
