import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTapComponent } from './cs-tap.component';

describe('CsTapComponent', () => {
  let component: CsTapComponent;
  let fixture: ComponentFixture<CsTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
