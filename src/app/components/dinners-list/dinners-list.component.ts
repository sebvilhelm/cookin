import { Component, OnInit, OnDestroy } from '@angular/core';
import { Dinner } from '../../entities/Dinner';
import { Subscription } from 'rxjs/Subscription';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';

@Component({
  selector: 'app-dinners-list',
  templateUrl: './dinners-list.component.html',
  styleUrls: ['./dinners-list.component.scss']
})
export class DinnersListComponent implements OnInit, OnDestroy {
  dinners: Dinner[];
  subscription: Subscription;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.subscription = this.ngRedux.select(state => state.dinners).subscribe(dinnersState => this.dinners = dinnersState.dinners);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
