import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from '../../../entities/Person';
import { Subscription } from 'rxjs/Subscription';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../../store/store';
import { UsersActions } from '../../../users/users.actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: Person[];
  usersSubscription: Subscription;

  constructor(
    private usersActions: UsersActions,
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
    this.usersActions.getUsers();

    this.usersSubscription = this.ngRedux.select(state => state.users).subscribe(users => {
      this.users = users.users.filter(user => user.id !== users.currentUser.id);
    }
    );
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }

  deleteUser(id: string) {

  }

}
