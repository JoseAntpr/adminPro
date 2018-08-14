import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(
    public activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe( params => {
      const term = params['term'];
      console.log(term);
    });
  }

  ngOnInit() {
  }

}
