import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent {
  
  newCar = {
    name: '',
    year: 2015
  };
  
  @Output() onAddCar = new EventEmitter<{name: string, year: number}>();

  addCar() {
    this.onAddCar.emit(this.newCar);
    this.newCar ={
      name: '',
      year: 2015
    };;
  }

}
