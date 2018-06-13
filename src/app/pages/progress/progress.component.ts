import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  percent1 = 20;
  percent2 = 30;
  constructor() { }

  ngOnInit() {
  }


}
