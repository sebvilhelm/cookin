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
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { TagInputComponent } from './components/register-form/tag-input/tag-input.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UsersService } from './users/users.service';
import { UsersActions } from './users/users.actions';

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
    LoginFormComponent
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
