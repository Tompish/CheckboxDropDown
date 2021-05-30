import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxInput } from './checkboxinput.component';

describe('CbdropdownelementComponent', () => {
  let component: CheckboxInput;
  let fixture: ComponentFixture<CheckboxInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxInput ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
