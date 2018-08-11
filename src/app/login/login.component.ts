import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame = false;
  email: string;

  constructor(
    public router: Router,
    public _userService: UserService
  ) { }

  ngOnInit() {
    init_plugins();

    console.log(localStorage.getItem('email'));
    this.email = localStorage.getItem('email') || '';
    if ( this.email.length > 1) {
      this.recuerdame = true;
    }
  }

  login(form: NgForm) {


    if ( form.invalid) {
      return;
    }

    console.log(form.value);

    const user = new User(
      null,
      form.value.email,
      form.value.password
    );

    this._userService.login(user, form.value.recuerdame).subscribe( resp => {
      this.router.navigate(['/dashboard']);
    });

  }

}
