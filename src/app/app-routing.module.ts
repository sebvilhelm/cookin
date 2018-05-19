import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddDinnerComponent } from './components/add-dinner/add-dinner.component';
import { DinnersListComponent } from './components/dinners-list/dinners-list.component';
import { AuthGuardService } from './services/auth-guard.service';
import { MyDinnersComponent } from './components/my-dinners/my-dinners.component';
import { EditDinnerComponent } from './components/edit-dinner/edit-dinner.component';

// TODO: Child routes

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dinners',
    pathMatch: 'full'
  },
  {
    path: 'dinners',
    component: DinnersListComponent
  },
  {
    path: 'my-dinners',
    component: MyDinnersComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'add-dinner',
    component: AddDinnerComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'edit-dinner/:id',
    component: EditDinnerComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    loadChildren: './components/admin/admin.module#AdminModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
