import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinner-form',
  templateUrl: './dinner-form.component.html',
  styleUrls: ['./dinner-form.component.scss']
})
export class DinnerFormComponent implements OnInit {

  dinnerForm: FormGroup;

  autocompleteTags: string[] = [];

  constructor(private fb: FormBuilder) { }

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
    console.log(form.value);
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
