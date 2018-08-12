import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/service.index';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users: User[] = [];
  next = 0;

  totalUsers = 0;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.loadUsers( this.next )
          .subscribe( (resp: any) => {
            this.totalUsers = resp.total;
            this.users = resp.users;
          });
  }

}
