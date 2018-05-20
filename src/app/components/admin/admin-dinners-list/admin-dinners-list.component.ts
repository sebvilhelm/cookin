import { Component, OnInit, OnDestroy } from '@angular/core';
import { Dinner } from '../../../entities/Dinner';
import { Subscription } from 'rxjs/Subscription';
import { DinnersActions } from '../../../dinners/dinners.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../../store/store';

@Component({
  selector: 'app-admin-dinners-list',
  templateUrl: './admin-dinners-list.component.html',
  styleUrls: ['./admin-dinners-list.component.scss']
})
export class AdminDinnersListComponent implements OnInit, OnDestroy {

  dinners: Dinner[];
  dinnerSubscription: Subscription;

  constructor(
    private dinnersActions: DinnersActions,
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
    this.dinnersActions.getDinners();

    this.dinnerSubscription = this.ngRedux.select(state => state.dinners).subscribe(dinnersState => this.dinners = dinnersState.dinners);
  }

  ngOnDestroy() {
    this.dinnerSubscription.unsubscribe();
  }

  deleteDinner(id: string) {
    this.dinnersActions.removeDinner(id);
  }

}
