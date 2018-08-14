import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(
    public userService: UserService,
    public route: Router
  ) { }

  ngOnInit() {
    this.user = this.userService.user;
  }

  search(value: string) {
    this.route.navigate(['/search', value]);
  }
}
