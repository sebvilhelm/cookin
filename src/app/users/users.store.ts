import { Person } from '../entities/Person';

export class UsersState {
  currentUser: Person | undefined;
  users: Person[];
}
