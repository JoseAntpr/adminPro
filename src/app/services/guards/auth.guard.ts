import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
        public _userService: UserService,
        public router: Router
      ) {}

  canActivate(): boolean {

    if ( this._userService.isAuthenticated() ) {
      return true;
    } else {
      console.log('Bloqueado por guard');
      this.router.navigate(['/login']);
      return false;
    }

  }
}
