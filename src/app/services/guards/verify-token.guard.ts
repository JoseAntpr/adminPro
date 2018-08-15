import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class VerifyTokenGuard implements CanActivate {

  constructor(
    public userService: UserService,
    public router: Router
  ) {}

  canActivate(): Promise<boolean> | boolean {
    const token = this.userService.token;
    const payload = JSON.parse( atob( token.split('.')[1]));
    const expired = this.expiredTime( payload.exp );

    if ( expired ) {
      this.router.navigate(['/login']);
      return false;
    }


    return this.verifyRenovate(payload.exp);
  }

  verifyRenovate( dateExp: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const tokenExp = new Date( dateExp * 1000);
      const now = new Date();

      now.setTime( now.getTime() + ( 4 * 60 * 60 * 1000));

      if ( tokenExp.getTime() > now.getTime()) {
        resolve(true);
      } else {
        this.userService.renovateToken()
            .subscribe( () => resolve(true),
            () => {
              this.router.navigate(['/login']);
              reject(false);
            });
      }
      resolve(true);
    });
  }

  expiredTime( dateExp: number) {
    const now = new Date().getTime() / 1000;
    if ( dateExp < now ) {
      return true;
    } else {
      return false;
    }
  }
}
