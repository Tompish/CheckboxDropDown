import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbdropdownlistComponent } from './cbdropdownlist.component';

describe('CbdropdownlistComponent', () => {
  let component: CbdropdownlistComponent;
  let fixture: ComponentFixture<CbdropdownlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbdropdownlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbdropdownlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
