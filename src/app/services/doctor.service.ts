import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../config/config';
import { map } from 'rxjs/operators';

@Injectable()
export class DoctorService {

  totalDoctors = 0;

  constructor(
    public http: HttpClient
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
}
