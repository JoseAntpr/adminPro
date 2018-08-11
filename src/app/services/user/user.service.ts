import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { URL_SERVICE } from '../../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  token: string;

  constructor(
    public http: HttpClient
  ) {  }

  saveStorage( id: string, token: string, user: User) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(token));

    this.user = user;
    this.token = token;
  }

  loginGoogle ( token: string ) {
    const url = URL_SERVICE + '/login/google';

    return this.http.post(url, { token })
            .pipe(
              map( (resp: any) => {
                this.saveStorage(resp.id, resp.token, resp.user);
                return true;
              })
            );
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

          this.saveStorage(resp.id, resp.token, resp.user);

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
