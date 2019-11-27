import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {

  car: string = 'Ford';
  showText:string = '';
  show = false;

  inputText = '';

  canShow(value: string) {
    this.show = true;
    this.showText = value;
  }

  getText(event: Event) {
    this.inputText = (<HTMLInputElement>event.target).value
  }

  constructor() {}

}
