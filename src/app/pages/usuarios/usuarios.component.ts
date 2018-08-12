import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/service.index';

declare var swal: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users: User[] = [];
  next = 0;

  totalUsers = 0;
  loading = true;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.userService.loadUsers( this.next )
          .subscribe( (resp: any) => {
            this.totalUsers = resp.total;
            this.users = resp.users;
            console.log(this.users);
            this.loading = false;
          });
  }

  changeNext(value: number) {
    const next = this.next + value;

    if ( next >= this.totalUsers ) {
      return;
    }

    if ( next < 0) {
      return ;
    }

    this.next += value;
    this.loadUsers();
  }

  searchUser( term: string) {
    if (term.length <= 0) {
      this.loadUsers();
      return;
    }
    this.loading = true;
    this.userService.searchUsers(term)
        .subscribe( (users: User[]) => {
          this.users = users;
          this.loading = false;
        });
  }

  deleteUser(user: User) {
    if ( user._id === this.userService.user._id ) {
      swal('No puede borrar usuario', 'no se puede borrar así mismo', 'error');
      return;
    }

    swal({
      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar a ' + user.name,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then( willDelete => {
      if ( willDelete ) {
        this.userService.deleteUser( user._id )
              .subscribe( resp => {
                this.next = 0;
                this.loadUsers();
              });
      }
    });
  }

  saveUser( user: User) {
    this.userService.updateUser( user )
          .subscribe();
  }


}
