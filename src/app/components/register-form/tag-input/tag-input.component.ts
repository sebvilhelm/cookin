/*
* Heavily inspired by https://material.angular.io/components/chips/overview
* Autocomplete: https://github.com/angular/material2/tree/master/src/material-examples/chips-autocomplete
*/

import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
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
  @Input() tags: string[];
  @Output() addTag: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeTag: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('tagInput') tagInput: ElementRef;

  filteredTags: Observable<any[]>;
  tagCtrl: FormControl;

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  maxSuggestions: number = 4;

  separatorKeysCodes = [ENTER, COMMA];

  autocompleteTags: string[] = [
    'Vegan',
    'Vegetarian',
    'Nut Allergy',
    'Gluten Allergy',
    'Lactose Intolerant',
  ];

  constructor() {
    this.tagCtrl = new FormControl();
  }

  ngOnInit() {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this.filter(tag) : []));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tag
    if ((value || '').trim()) {
      this.addTag.emit(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: any): void {
    this.removeTag.emit(tag);
  }

  filter(name: string) {
    // return this.autocompleteTags.filter(tag =>
    //   tag.toLowerCase().indexOf(name.toLowerCase()) === 0);
    return this.autocompleteTags.filter(tag => tag.toLowerCase().includes(name.toLowerCase())).slice(0, this.maxSuggestions);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.addTag.emit(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
  }

}
