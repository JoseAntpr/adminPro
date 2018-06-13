import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doughnut-char',
  templateUrl: './doughnut-char.component.html',
  styleUrls: ['./doughnut-char.component.css']
})
export class DoughnutCharComponent implements OnInit {

  @Input() data;
  @Input() labels;
  @Input() chartType;
  @Input() leyenda;

  constructor() { }

  ngOnInit() {
  }

}
