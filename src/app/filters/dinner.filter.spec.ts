import { TestBed, async } from '@angular/core/testing';
import { DinnersFilter } from './dinners.filter';



describe('DinnersFilter', () => {
  this.pipe = new DinnersFilter();
  beforeEach(() => {
    this.dinners = [
      { menu: 'Spaghetti Bolognese', specifics: ['No Salad', 'Italian'] },
      { menu: 'Carrot Soup', specifics: ['Vegan', 'Gluten free'] },
      { menu: 'Spaghetti Carbonara', specifics: ['Lactose Free', 'Italian'] },
      { menu: 'Chili Con Carne', specifics: ['No Salad'] },
      { menu: 'Calzone', specifics: ['Pizza', 'Italian'] }
    ];
    TestBed.configureTestingModule({
      declarations: [
        DinnersFilter
      ],
    });
  });

  it('should return input with no search string', () => {
    const result = this.pipe.transform(this.dinners, '');
    expect(result.length).toBe(5);
  });

  it('should return no result with empty array', () => {
    const result = this.pipe.transform([], 'Hi');
    expect(result.length).toBe(0);
  });

  it('should return on any string match on the menu', () => {
    const result = this.pipe.transform(this.dinners, 'Spaghetti');
    expect(result.length).toBe(2);
  });

  it('should return on string match with any specificity ', () => {
    const result = this.pipe.transform(this.dinners, 'Italian');
    expect(result.length).toBe(3);
  });

  it('should return no result on no match', () => {
    const result = this.pipe.transform(this.dinners, 'Nut Free');
    expect(result.length).toBe(0);
  });

});
