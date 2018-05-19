import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../../material/material.module';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ],
  declarations: [
    AdminComponent,
    UserListComponent
  ],
  providers: []
})
export class AdminModule { }
