import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomErrorComponent } from './random-error.component';

describe('RandomErrorComponent', () => {
  let component: RandomErrorComponent;
  let fixture: ComponentFixture<RandomErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
