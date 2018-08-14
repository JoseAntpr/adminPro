import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';


@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    public userService: UserService,
  ) {}
  canActivate() {
    if (  this.userService.user.role === 'ADMIN_ROLE') {
      return true;
    } else {
      console.log('Bloqueado por el admin Guard');
      this.userService.logout();
      return false;
    }

  }
}
