import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDinnerComponent } from './add-dinner.component';

describe('AddDinnerComponent', () => {
  let component: AddDinnerComponent;
  let fixture: ComponentFixture<AddDinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
