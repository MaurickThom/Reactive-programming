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
  }

}
