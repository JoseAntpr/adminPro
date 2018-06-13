import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

  @Input() leyenda = 'Leyenda';
  @Input() percent = 50;
  @Output() changePercent: EventEmitter<number> = new EventEmitter();
  @ViewChild('txtPercent') txtPercent: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onChanges( newValue: number) {

    console.log(this.txtPercent);

    if (newValue >= 100) {
      this.percent = 100;
    } else if ( newValue <= 0) {
      this.percent = 0;
    } else {
      this.percent = newValue;
    }
    this.txtPercent.nativeElement.value = this.percent;
    this.changePercent.emit( this.percent );

  }

  changeValue( value: number) {
    if ( (this.percent >= 100 && value > 0 ) || (this.percent <= 0 && value < 0)) {
      return;
    }
    this.percent = this.percent + value;

    this.changePercent.emit( this.percent );

    this.txtPercent.nativeElement.focus();
  }

}
