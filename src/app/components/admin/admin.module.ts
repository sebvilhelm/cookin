import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../../material/material.module';
import { UserListComponent } from './admin-user-list/user-list.component';
import { AdminDinnersListComponent } from './admin-dinners-list/admin-dinners-list.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ],
  declarations: [
    AdminComponent,
    UserListComponent,
    AdminDinnersListComponent
  ],
  providers: []
})
export class AdminModule { }
