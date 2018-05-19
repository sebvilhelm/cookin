import { Person } from './Person';

export class Event {
  id: string;
  title?: string;
  streetAddress: string;
  city: string;
  host: Person;
  date: Date;
  attendeesMax: number;
  attendees: Person[];
}
