import { Component, OnInit } from '@angular/core';
import { UsersActions } from '../../users/users.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private userActions: UsersActions
  ) { }

  ngOnInit() {
    this.userActions.getUsers();
  }

}
