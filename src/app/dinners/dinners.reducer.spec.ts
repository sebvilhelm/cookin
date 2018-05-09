import { dinnersReducer } from './dinners.reducer';
import { DinnersService } from './dinners.service';

const deepFreeze = require('deep-freeze');

describe('Dinners reducer', () => {

  it('should return initial state', () => {
    expect(dinnersReducer(undefined, {})).toEqual(DinnersService.getInitalState());
  });

});
