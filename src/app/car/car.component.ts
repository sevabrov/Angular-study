import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnChanges {

  @Input('carItem') car: {name: string, year:number};
  @Input() name: string;

  ngOnChanges (changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

}