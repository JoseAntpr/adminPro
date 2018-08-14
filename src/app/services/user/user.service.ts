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
  menu: any = [];

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
      this.menu = JSON.parse( localStorage.getItem('menu'));
    } else {
      this.token = '';
      this.user = null;
      this.menu = [];
    }
  }

  saveStorage( id: string, token: string, user: User, menu: any) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('menu', JSON.stringify(menu));

    this.user = user;
    this.token = token;
    this.menu = menu;
  }

  logout() {
    this.user = null;
    this.token = '';
    this.menu = [];
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  loginGoogle ( token: string ) {
    const url = URL_SERVICE + '/login/google';

    return this.http.post(url, { token })
            .pipe(
              map( (resp: any) => {
                console.log(resp);
                this.saveStorage(resp.id, resp.token, resp.user, resp.menu);
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

          this.saveStorage(resp.id, resp.token, resp.user, resp.menu);

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
                  if ( user._id === this.user._id ) {
                    this.saveStorage( resp.user._id, this.token, resp.user, this.menu);

                  }
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

              this.saveStorage(id, this.token, this.user, this.menu);
            })
            .catch( resp => {
              console.log(resp);
            });
  }

  loadUsers( next: number = 0 ) {
    const url = URL_SERVICE + '/user?next=' + next;

    return this.http.get( url );
  }

  searchUsers( term: string ) {
    const url = URL_SERVICE + '/search/collection/users/' + term;

    return this.http.get( url )
            .pipe(
              map((resp: any) => resp.users)
            );
  }

  deleteUser ( id: string ) {
    const url = URL_SERVICE + '/user/' + id + '?token=' + this.token;

    return this.http.delete( url )
              .pipe(
                map( resp => {
                  swal('Usuario borrado', 'El usuario a sido eliminado correctamente', 'success');
                  return true;
                })
              );
  }
}
