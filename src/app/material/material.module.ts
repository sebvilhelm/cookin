import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatIconModule,
  MatAutocompleteModule,
  MatCardModule,
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatCardModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatCardModule,
  ],
  declarations: []
})
export class MaterialModule { }
