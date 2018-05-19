import { Event } from './Event';

export class Dinner extends Event {
  menu: string;
  description?: string;
  specifics: string[];
}
