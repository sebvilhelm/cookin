import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export class DateValidator {
  static isTodayOrAfter(control: AbstractControl) {
    const dateAsMoment = moment.isMoment(control.value) ? control.value : moment(control.value);
    if (dateAsMoment.isBefore(moment.now(), 'day')) {
      return { invalidDate: true };
    }
    return null;
  }
}
