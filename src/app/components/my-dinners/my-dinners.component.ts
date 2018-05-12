import { Component, OnInit, OnDestroy } from '@angular/core';
import { Dinner } from '../../entities/Dinner';
import { Subscription } from 'rxjs/Subscription';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { DinnersActions } from '../../dinners/dinners.actions';

@Component({
  selector: 'app-my-dinners',
  templateUrl: './my-dinners.component.html',
  styleUrls: ['./my-dinners.component.scss']
})
export class MyDinnersComponent implements OnInit, OnDestroy {

  dinners: Dinner[];
  subscription: Subscription;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private dinnersActions: DinnersActions
  ) { }

  ngOnInit() {
    this.subscription = this.ngRedux.select(state => state.dinners).subscribe(dinnersState =>
      // TODO: Make dynamic
      this.dinners = dinnersState.dinners.filter(dinner => dinner.host.email = 'seb.vilhelm@gmail.com')
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeDinner(id: string) {
    this.dinnersActions.removeDinner(id);
  }


}
