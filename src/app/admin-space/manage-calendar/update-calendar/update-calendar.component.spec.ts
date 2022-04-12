import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCalendarComponent } from './update-calendar.component';

describe('UpdateCalendarComponent', () => {
  let component: UpdateCalendarComponent;
  let fixture: ComponentFixture<UpdateCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
