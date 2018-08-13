import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../config/config';
import { map } from 'rxjs/operators';
import { UserService } from './user/user.service';

@Injectable()
export class DoctorService {

  totalDoctors = 0;

  constructor(
    public http: HttpClient,
    public userService: UserService
  ) { }

  loadDoctors() {
    const url = URL_SERVICE + '/doctor';

    return this.http.get( url )
              .pipe(
                map( (resp: any) => {
                  this.totalDoctors = resp.total;
                  return resp.doctors;
                })
              );
  }

  searchDoctors( term: string ) {
    const url = URL_SERVICE + '/search/collection/doctors/' + term;

    return this.http.get( url )
            .pipe(
              map((resp: any) => resp.doctors)
            );
  }

  deleteDoctor( id: string ) {
    const url = URL_SERVICE + '/doctor/' + id + '?token=' + this.userService.token;

    return this.http.delete(url)
              .pipe(
                map( resp => {
                  swal('Doctor borrado', 'Médico borrado con éxito', 'success');
                  return true;
                })
              );
  }
}
