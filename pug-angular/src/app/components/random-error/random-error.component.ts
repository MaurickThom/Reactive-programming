import { Component, OnInit } from '@angular/core';
import {Observable,Observer,Subscription} from 'rxjs'
@Component({
  selector: 'app-random-error',
  templateUrl: './random-error.component.html',
  styleUrls: ['./random-error.component.scss']
})
export class RandomErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const observable: Observable<Function> = Observable.create((observer:Observer<any>)=>{
      let n = 1
      const intervalId = setInterval(()=>{
        if(Math.random() < 0.8 && n < 9){
          observer.next(n*n)
          n++
        }else{
          observer.error('Error xd')
        }
      },1000)
      return () => clearInterval(intervalId)
    })
    const observer:Subscription = observable.subscribe(console.log)
  }

}
