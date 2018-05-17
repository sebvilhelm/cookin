import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/debounceTime';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { UsersActions } from '../../../users/users.actions';
import { Person } from '../../../entities/Person';
import { DinnersService } from '../../../dinners/dinners.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  autocompleteTags: string[] = [];

  constructor(
    private fb: FormBuilder,
    private dinnersService: DinnersService,
    private usersActions: UsersActions
  ) { }

  onSubmit(form) {
    if (form.valid) {
      const user = form.value as Person;
      this.usersActions.addUser(user);
    } else {
      alert('invalid form');
    }
  }

  ngOnInit() {
    this.autocompleteTags = this.dinnersService.getAutocompleteItems();

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
