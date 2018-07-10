import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import swal from 'sweetalert';

declare function init_plugins();

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./login.component.css']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    init_plugins();

    this.form = new FormGroup({
      name: new FormControl( null, Validators.required ),
      email: new FormControl( null, [Validators.required, Validators.email] ),
      password: new FormControl( null, Validators.required ),
      password2: new FormControl( null, Validators.required ),
      conditions: new FormControl()
    }, {validators: this.sameField('password', 'password2')});
  }

  sameField( field1: string, field2: string) {
    return (group: FormGroup) => {
      const pass1 = group.controls[field1].value;
      const pass2 = group.controls[field2].value;

      if (pass1 === pass2 ) {
        return null;
      }
      return {
        areEqual: true
      };
    };
  }

  register() {
    if ( this.form.invalid) {
      return;
    }

    if ( !this.form.value.conditions ) {
      swal('Importante', 'Debe aceptar las conciones', 'warning');
      return;
    }
  }

}
