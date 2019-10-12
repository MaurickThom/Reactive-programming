import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervaltimerComponent } from './intervaltimer.component';

describe('IntervaltimerComponent', () => {
  let component: IntervaltimerComponent;
  let fixture: ComponentFixture<IntervaltimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervaltimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervaltimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
