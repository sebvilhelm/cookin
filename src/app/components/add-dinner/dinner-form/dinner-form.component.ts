import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dinner } from '../../../entities/Dinner';
import { DinnersService } from '../../../dinners/dinners.service';
import { DinnersActions } from '../../../dinners/dinners.actions';
import { Person } from '../../../entities/Person';
import { Subscription } from 'rxjs/Subscription';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../../store/store';

@Component({
  selector: 'app-dinner-form',
  templateUrl: './dinner-form.component.html',
  styleUrls: ['./dinner-form.component.scss']
})
export class DinnerFormComponent implements OnInit, OnDestroy {

  dinnerForm: FormGroup;
  autocompleteTags: string[] = [];
  host: Person;
  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private dinnersActions: DinnersActions,
    private ngRedux: NgRedux<IAppState>,
    private dinnersService: DinnersService
  ) { }

  ngOnInit() {
    this.autocompleteTags = this.dinnersService.getAutocompleteItems();

    this.subscription = this.ngRedux.select(state => state.users.currentUser).subscribe(user => this.host = user);

    this.dinnerForm = this.fb.group({
      title: '',
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      date: [new Date(), Validators.required],
      attendeesMax: [0, [Validators.required, Validators.min(1)]],
      menu: ['', Validators.required],
      description: [''],
      specifics: [[]]
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: FormGroup) {
    if (!form.valid) { return; }
    const dinner = form.value as Dinner;
    dinner.host = this.host;
    dinner.id = DinnersService.generateId();
    this.dinnersActions.addDinner(dinner);
  }

  addSpecificity(tag: string) {
    const specifics = this.dinnerForm.value.specifics;
    const newSpecifics = [...specifics, tag];
    this.dinnerForm.controls.specifics.setValue(newSpecifics);
  }

  removeSpecificity(tag: string) {
    const specifics = this.dinnerForm.value.specifics;
    const index = specifics.indexOf(tag);
    if (index < 0) { return; }

    const newSpecifics = [...specifics.slice(0, index), ...specifics.slice(index + 1)];
    this.dinnerForm.controls.specifics.setValue(newSpecifics);
  }

}
