import { Component, OnInit } from '@angular/core';
import {map,filter} from 'rxjs/operators'
import { of, pipe, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-map-filter',
  templateUrl: './map-filter.component.html',
  styleUrls: ['./map-filter.component.scss']
})
export class MapFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const nums = of<number>(1,2,3,4,5)

    // nums.pipe(
    //   filter((num:number)=>num%2===0),
    //   map((num:number)=>Math.pow(num,2))
    // ).subscribe(console.log)

    const alCuadrado = pipe(
      filter((num:number)=>num%2===0),
      map((num:number)=>Math.pow(num,2))
    )
    const cuadrado = alCuadrado(nums)
      .subscribe(console.log)

  }

}
