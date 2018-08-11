import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/service.index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor( public userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.user;
  }

  save( user: User ) {
    this.user.name = user.name;
    this.user.email = user.email;

    this.userService.updateUser(this.user)
          .subscribe( resp => {
            console.log(resp);
          });
  }

}
