import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { URL_SERVICE } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient
  ) {
    console.log('Servicio de usuario listo');
  }

  createUser( user: User ) {
    const url = URL_SERVICE + '/user';

    return this.http.post(url, user);
  }
}
