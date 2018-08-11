import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { URL_SERVICE } from '../../config/config';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';
import { UploadFileService } from '../upload-service/upload-file.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router,
    public uploadFileService: UploadFileService
  ) {
    this.loadStorage();
   }

  isAuthenticated () {
    return ( this.token.length > 5 ) ? true : false;
  }

  loadStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse( localStorage.getItem('user'));
    } else {
      this.token = '';
      this.user = null;
    }
  }

  saveStorage( id: string, token: string, user: User) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    this.user = user;
    this.token = token;
  }

  logout() {
    this.user = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
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

  updateUser( user: User) {
    const url = URL_SERVICE + '/user/' + user._id + '?token=' + this.token;
    console.log(url);

    return this.http.put( url, user )
              .pipe(
                map( (resp: any) => {
                  this.saveStorage( resp.user._id, this.token, resp.user);
                  swal('Usuario actualizado', resp.user.name, 'success');
                  return true;
                })
              );
  }

  changeImage(file: File, id: string) {
    this.uploadFileService.uploadFile( file, 'users', id)
            .then((resp: any) => {
              this.user.img = resp.user.img;
              swal('Imagen actualizada', this.user.name, 'success');

              this.saveStorage(id, this.token, this.user);
            })
            .catch( resp => {
              console.log(resp);
            });
  }
}
