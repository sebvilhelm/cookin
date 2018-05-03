import { Event } from './Event';

export class Dinner extends Event {
  menu: string;
  specifics?: string[];
}
