import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterFormComponent } from './components/register/register-form/register-form.component';
import { TagInputComponent } from './components/register/register-form/tag-input/tag-input.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { DinnerFormComponent } from './components/add-dinner/dinner-form/dinner-form.component';
import { AddDinnerComponent } from './components/add-dinner/add-dinner.component';
import { DinnersListComponent } from './components/dinners-list/dinners-list.component';
import { MyDinnersComponent } from './components/my-dinners/my-dinners.component';
import { EditDinnerComponent } from './components/edit-dinner/edit-dinner.component';

// Filters/pipes
import { FilterDinners } from './filters/dinners.filter';

// Redux
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IAppState, rootReducer, INITAL_STATE } from './store/store';
import { UsersService } from './users/users.service';
import { UsersActions } from './users/users.actions';
import { DinnersActions } from './dinners/dinners.actions';
import { DinnersService } from './dinners/dinners.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UsersEpic } from './users/users.epic';
import { DinnersEpic } from './dinners/dinners.epic';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    RegisterFormComponent,
    TagInputComponent,
    LoginFormComponent,
    DinnerFormComponent,
    AddDinnerComponent,
    DinnersListComponent,
    MyDinnersComponent,
    FilterDinners,
    EditDinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    AuthGuardService,
    UsersActions,
    UsersService,
    DinnersActions,
    DinnersService,
    UsersEpic,
    DinnersEpic
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter,
    private usersEpic: UsersEpic,
    private dinnersEpic: DinnersEpic
  ) {

    const enhancers = [devTool.enhancer()];

    const rootEpic = combineEpics(
      this.usersEpic.getUsers,
      this.usersEpic.addUser,
      this.usersEpic.loginUser,
      this.dinnersEpic.getDinners,
      this.dinnersEpic.addDinner,
      this.dinnersEpic.updateDinner,
      this.dinnersEpic.deleteDinner
    );

    const middleware = [
      createEpicMiddleware(rootEpic), createLogger({ level: 'info', collapsed: true })
    ];

    this.ngRedux.configureStore(
      rootReducer,
      INITAL_STATE,
      middleware,
      enhancers
    );

    ngReduxRouter.initialize();
  }

}
