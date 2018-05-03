import { Event } from './Event';

export class Dinner extends Event {
  food: string;
  specificities?: string[];
}
