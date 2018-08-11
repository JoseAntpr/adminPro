import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { URL_SERVICE } from '../../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient
  ) {
    console.log('Servicio de usuario listo');
  }

  login( user: User, recuerdame: boolean = false ) {
    const url = URL_SERVICE + '/login';

    if (recuerdame) {
      localStorage.setItem('email', user.email );
    } else {
      localStorage.removeItem('email');
    }

    return this.http.post( url, user)
      .pipe(
        map( (resp: any ) => {
          localStorage.setItem('id', resp.id);
          localStorage.setItem('token', resp.token);
          localStorage.setItem('user', JSON.stringify(resp.token));

          return true;
        })
      );
  }

  createUser( user: User ) {
    const url = URL_SERVICE + '/user';

    return this.http.post(url, user)
      .pipe(
        map( (resp: any) => {
          swal('Usuario creado', resp.user.email, 'success');
          return resp.user;
        })
      );
  }
}
