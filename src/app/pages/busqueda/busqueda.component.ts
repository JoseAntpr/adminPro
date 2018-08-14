import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';
import { User } from '../../models/user.model';
import { Medico } from '../../models/medico.model';
import { Hospital } from '../../models/hospital.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  users: User[] = [];
  doctors: Medico[] = [];
  hospitals: Hospital[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpClient
  ) {
    this.activatedRoute.params.subscribe( params => {
      const term = params['term'];
      this.search(term);
    });
  }

  ngOnInit() {
  }

  search(term: string) {
    const url = URL_SERVICE + '/search/all/' + term;

    this.http.get( url ).subscribe( (resp: any) => {
      console.log(resp);
      this.users = resp.users;
      this.doctors = resp.doctors;
      this.hospitals = resp.hospitals;
    });
  }

}
