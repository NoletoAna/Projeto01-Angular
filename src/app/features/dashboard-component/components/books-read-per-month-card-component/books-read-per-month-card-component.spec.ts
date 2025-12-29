import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksReadPerMonthCardComponent } from './books-read-per-month-card-component';

describe('BooksReadPerMonthCardComponent', () => {
  let component: BooksReadPerMonthCardComponent;
  let fixture: ComponentFixture<BooksReadPerMonthCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksReadPerMonthCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksReadPerMonthCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
