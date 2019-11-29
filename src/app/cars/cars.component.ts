import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  isShown = false;
  cars = ['Ford', 'Toyota', 'Opel']

  showCars() {
    this.isShown = !this.isShown;
  }

  updareCarList(car:string) {
    this.cars.push(car)
  }
  
}
