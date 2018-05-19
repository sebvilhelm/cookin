import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Person } from '../../../entities/Person';
import { UsersActions } from '../../../users/users.actions';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private usersActions: UsersActions) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    if (!form.valid) { return; }
    const email = form.value.email;
    this.usersActions.logInUser(email);
  }

}
