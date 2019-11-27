import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  isShown = false;
  cars = ['Ford', 'Toyota', 'Opel']
  newCar = '';

  showCars() {
    this.isShown = !this.isShown;
  }

  addCar() {
    this.cars.push(this.newCar)
    this.newCar = ''
  }

  constructor() {

  }
  
}
