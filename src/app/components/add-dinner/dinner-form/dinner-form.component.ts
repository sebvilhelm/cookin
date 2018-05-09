import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dinner } from '../../../entities/Dinner';
import { DinnersService } from '../../../dinners/dinners.service';
import { DinnersActions } from '../../../dinners/dinners.actions';

@Component({
  selector: 'app-dinner-form',
  templateUrl: './dinner-form.component.html',
  styleUrls: ['./dinner-form.component.scss']
})
export class DinnerFormComponent implements OnInit {

  dinnerForm: FormGroup;

  autocompleteTags: string[] = [];

  constructor(
    private fb: FormBuilder,
    private dinnersActions: DinnersActions
  ) { }

  ngOnInit() {
    this.dinnerForm = this.fb.group({
      name: '',
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      date: [new Date(), Validators.required],
      attendeesMax: [0, [Validators.required, Validators.min(1)]],
      menu: ['', Validators.required],
      description: [''],
      specifics: [[]]
    });
  }

  onSubmit(form: FormGroup) {
    if (!form.valid) { return; }
    const dinner = form.value as Dinner;
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
