import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoIconComponent } from './logo-icon-component';

describe('LogoIconComponent', () => {
  let component: LogoIconComponent;
  let fixture: ComponentFixture<LogoIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoIconComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
