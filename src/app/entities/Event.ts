import { Person } from './Person';

export class Event {
  id: string;
  name?: string;
  streetAddress: string;
  city: string;
  host: Person;
  date: Date;
  attendeesMax: number;
  attendees?: Person[];
}
