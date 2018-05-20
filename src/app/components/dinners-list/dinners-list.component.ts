import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from '../../entities/Person';
import { Dinner } from '../../entities/Dinner';
import { Subscription } from 'rxjs/Subscription';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { DinnersActions } from '../../dinners/dinners.actions';
import { DinnersService } from '../../dinners/dinners.service';

@Component({
  selector: 'app-dinners-list',
  templateUrl: './dinners-list.component.html',
  styleUrls: ['./dinners-list.component.scss']
})
export class DinnersListComponent implements OnInit, OnDestroy {
  dinners: Dinner[];
  currentUser: Person;
  dinnerSubscription: Subscription;
  userSubscription: Subscription;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private dinnersActions: DinnersActions
  ) { }

  ngOnInit() {
    /* this.dinnersActions.getDinners();
    this.userSubscription = this.ngRedux.select(state => state.users.currentUser).subscribe(user => {
      this.currentUser = user;
      this.dinnerSubscription = this.ngRedux.select(state => state.dinners).subscribe(dinnersState =>
        this.dinners = dinnersState.dinners.filter(dinner =>
          user ? dinner.host.id !== user.id : true
        )
      );

    }); */
  }

  ngOnDestroy() {
    // this.dinnerSubscription.unsubscribe();
    // this.userSubscription.unsubscribe();
  }

  addGuestToDinner(dinnerId: string) {
    if (!this.currentUser) {
      return;
    }
    this.dinnersActions.addAttendeeToDinner(dinnerId, this.currentUser);
  }
}
