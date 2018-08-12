import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
