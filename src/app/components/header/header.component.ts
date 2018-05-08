import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  subscription: Subscription;
  isLoggedIn: boolean = false;

  links: Object[] = [
    {
      name: 'Home',
      path: ''
    }
  ];

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.subscription = this.ngRedux.select(state => state.users.currentUser).subscribe(user => {
      this.isLoggedIn = user ? true : false;
    });
  }

  logOut() {
    // TODO: Redux
    console.log('log out');
  }

}
