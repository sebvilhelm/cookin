/*
* Heavily inspired by https://material.angular.io/components/chips/overview
* Autocomplete: https://github.com/angular/material2/tree/master/src/material-examples/chips-autocomplete
*/

import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs/Observable';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.scss']
})
export class TagInputComponent implements OnInit {
  @Input() placeholder: string;
  @ViewChild('tagInput') tagInput: ElementRef;

  filteredTags: Observable<any[]>;
  tagCtrl: FormControl;

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  separatorKeysCodes = [ENTER, COMMA];

  tags: string[] = [];

  autocompleteTags: string[] = [
    'Vegan',
    'Vegetarian',
    'Nut Allergy',
  ];

  constructor() {
    this.tagCtrl = new FormControl();
  }

  ngOnInit() {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this.filter(tag) : this.autocompleteTags.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tag
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    const index = this.tags.indexOf(fruit);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  filter(name: string) {
    return this.autocompleteTags.filter(fruit =>
      fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
  }


}
