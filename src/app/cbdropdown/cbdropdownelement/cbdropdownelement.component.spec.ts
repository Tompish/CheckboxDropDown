import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbdropdownelementComponent } from './cbdropdownelement.component';

describe('CbdropdownelementComponent', () => {
  let component: CbdropdownelementComponent;
  let fixture: ComponentFixture<CbdropdownelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbdropdownelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbdropdownelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
