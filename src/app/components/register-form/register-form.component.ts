import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/debounceTime';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  autocompleteTags: string[] = [
    'Vegan',
    'Vegetarian',
    'Nut Allergy',
    'Gluten Allergy',
    'Lactose Intolerant',
  ];

  constructor(
    private fb: FormBuilder
  ) { }

  onSubmit(form) {
    if (form.valid) {
      console.log('Submit form:', form.value);
    } else {
      alert('invalid form');
    }
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['Navn Navnesen', Validators.required],
      email: ['navn@example.com', Validators.email],
      dateOfBirth: [new Date(1992, 5, 19), Validators.required],
      area: ['Copenhagen', Validators.required],
      specialNeeds: [['Vegan', 'Gluten Allergy']] // Validation?!!?
    });
  }

  addNeed(tag: string) {
    const needs = this.registerForm.value.specialNeeds;

    const newNeeds = [...needs, tag];
    this.registerForm.controls.specialNeeds.setValue(newNeeds);
  }

  removeNeed(tag: string) {
    const needs = this.registerForm.value.specialNeeds;
    const index = needs.indexOf(tag);
    if (index < 0) { return; }

    const newNeeds = [...needs.slice(0, index), ...needs.slice(index + 1)];
    this.registerForm.controls.specialNeeds.setValue(newNeeds);
  }

}