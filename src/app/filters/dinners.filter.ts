import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Dinner } from '../entities/Dinner';


@Pipe({ name: 'filterDinners' })
@Injectable()
export class FilterDinners implements PipeTransform {
  transform(items: Dinner[], args: string) {
    if (args && items.length > 0) {
      const filteredItems = items.filter(item =>
        item.menu.toLowerCase().includes(args.toLowerCase())
        || item.specifics.includes(args)
      );
      return filteredItems;
    }
    return items;
  }
}
