import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatIconModule,
  MatAutocompleteModule,
  MatCardModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatListModule,
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatListModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatListModule,
  ],
  declarations: []
})
export class MaterialModule { }
