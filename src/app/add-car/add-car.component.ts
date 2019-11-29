import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent {
  
  newCar = '';
  
  @Output() onAddCar = new EventEmitter<string>();

  addCar() {
    this.onAddCar.emit(this.newCar);
    this.newCar ='';
  }

}
