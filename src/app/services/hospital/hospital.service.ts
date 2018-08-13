import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../../config/config';
import { map } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { Hospital } from '../../models/hospital.model';

@Injectable()
export class HospitalService {

  totalHospitals = 0;

  constructor(
    public http: HttpClient,
    public userService: UserService
  ) { }

  loadHospitals() {
    const url = URL_SERVICE + '/hospital';
    return this.http.get( url )
              .pipe(
                map( (resp: any) => {
                  this.totalHospitals = resp.total;
                  return resp.hospitals;
                })
              );
  }

  getHospital( id: string ) {
    const url = URL_SERVICE + '/hospital/' + id;

    return this.http.get( url )
              .pipe(
                map( (resp: any) => resp.hospital )
              );
  }

  deleteHospital( id: string ) {
    const url = URL_SERVICE + '/hospital/' + id + '?token=' + this.userService.token;

    return this.http.delete( url )
              .pipe(
                map( resp => swal('Hospital borrado', 'Eliminado correctamente', 'success'))
              );
  }

  createHospital( name: string ) {
    const url = URL_SERVICE + '/hospital?token=' + this.userService.token;

    return this.http.post( url, { name: name })
            .pipe(
              map( (resp: any) => {
                return resp.hospital;
              })
            );
  }

  searchHospital( term: string ) {
    const url = URL_SERVICE + '/search/collection/hospitals/' + term;
    return this.http.get( url )
            .pipe(
              map((resp: any) => resp.hospitals)
            );
  }

  updateHospital( hospital: Hospital) {
    const url = URL_SERVICE + '/hospital/' + hospital._id + '?token=' + this.userService.token;

    return this.http.put( url, hospital)
            .pipe(
              map( (resp: any) => {
                swal('Hospital Actualizado', 'El hospital ' + hospital.name + ' fue actualizado correctamente', 'success');
                return resp.hospital;
              })
            );
  }
}
