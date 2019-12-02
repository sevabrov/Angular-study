import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor() {
    console.log('constructor')
  }
  
  ngOnInit() {
    console.log('ngOnInit')
  }

  isShown = true;
  cars: [{name: string, year:number}] = [
    {name: 'Ford',
     year: 2015 }
  ]

  showCars() {
    this.isShown = !this.isShown;
  }

  updareCarList(car:{name: string, year:number}) {
    this.cars.push(car)
  }

  changeCarName (){
    this.cars[0].name = "New name"
  }
  
}
