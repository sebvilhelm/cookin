import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DinnersActions } from '../../dinners/dinners.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { DinnersService } from '../../dinners/dinners.service';
import { Dinner } from '../../entities/Dinner';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { tassign } from 'tassign';

@Component({
  selector: 'app-edit-dinner',
  templateUrl: './edit-dinner.component.html',
  styleUrls: ['./edit-dinner.component.scss']
})
export class EditDinnerComponent implements OnInit, OnDestroy {

  editDinnerForm: FormGroup;
  dinner: Dinner;
  autocompleteTags: string[] = [];
  dinnerSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private dinnersActions: DinnersActions,
    private ngRedux: NgRedux<IAppState>,
    private dinnersService: DinnersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.dinnerSubscription = this.ngRedux.select(state => state.dinners.dinners)
      .subscribe(dinners =>
        this.dinner = dinners.find(dinner => dinner.id = this.route.snapshot.params.id));

    this.editDinnerForm = this.fb.group({
      dinnerTitle: this.dinner.title,
      streetAddress: [this.dinner.streetAddress, Validators.required],
      city: [this.dinner.city, Validators.required],
      date: [new Date(this.dinner.date), Validators.required],
      attendeesMax: [this.dinner.attendeesMax, [Validators.required, Validators.min(1)]],
      menu: [this.dinner.menu, Validators.required],
      description: [this.dinner.description],
      specifics: [this.dinner.specifics]
    });
  }

  ngOnDestroy() {
    this.dinnerSubscription.unsubscribe();
  }

  onSubmit(form: FormGroup) {
    if (!form.valid) { return; }
    const dinner = tassign(this.dinner, form.value);
    console.log(dinner);
    this.dinnersActions.updateDinner(dinner as Dinner);
  }

  addSpecificity(tag: string) {
    const specifics = this.editDinnerForm.value.specifics;
    const newSpecifics = [...specifics, tag];
    this.editDinnerForm.controls.specifics.setValue(newSpecifics);
  }

  removeSpecificity(tag: string) {
    const specifics = this.editDinnerForm.value.specifics;
    const index = specifics.indexOf(tag);
    if (index < 0) { return; }

    const newSpecifics = [...specifics.slice(0, index), ...specifics.slice(index + 1)];
    this.editDinnerForm.controls.specifics.setValue(newSpecifics);
  }

}
