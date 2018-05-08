import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';

// Redux
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { ReactiveFormsModule } from '@angular/forms';
import { IAppState, rootReducer } from './store/store';
import { MaterialModule } from './modules/material.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterFormComponent } from './components/register/register-form/register-form.component';
import { TagInputComponent } from './components/register/register-form/tag-input/tag-input.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { UsersService } from './users/users.service';
import { UsersActions } from './users/users.actions';
import { DinnerFormComponent } from './components/add-dinner/dinner-form/dinner-form.component';
import { AddDinnerComponent } from './components/add-dinner/add-dinner.component';

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
    AddDinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    UsersActions,
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter
  ) {

    const enhancers = [devTool.enhancer()];
    const middleware = [];

    const initialState = {
      users: {
        currentUser: undefined,
        users: []
      }
    };

    this.ngRedux.configureStore(
      rootReducer,
      initialState,
      middleware,
      enhancers
    );

    ngReduxRouter.initialize();
  }

}
