import { Component } from '@angular/core';
import * as Rx from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private observable:Rx.Observable<Function>
  private observer:Rx.Subscription
  constructor(){}

  ngOnInit(): void {
    this.observable = Rx.Observable.create(obs=>{
      obs.next(1)
      obs.next(2)
      obs.next(3)
      setTimeout(()=>{
        obs.next(4)
        obs.complete()
      },1000)


    })
  }

  print(){
    console.log(this.observable)
    this.observer = this.observable.subscribe(x=>console.log(x))
    console.log(this.observer)
  }
  fuera(){
    console.log(this.observer)
  }
}
