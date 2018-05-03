import { Person } from './Person';

export class Event {
  name?: string;
  address: string;
  city: string;
  host: Person;
  date: Date;
  attendeesMax: number;
  attendees: Person[];
}
