import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

  @Input() leyenda = 'Leyenda';
  @Input() percent = 50;
  @Output() changePercent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeValue( value: number) {
    if ( (this.percent >= 100 && value > 0 ) || (this.percent <= 0 && value < 0)) {
      return;
    }
    this.percent = this.percent + value;

    this.changePercent.emit( this.percent );
  }

}
