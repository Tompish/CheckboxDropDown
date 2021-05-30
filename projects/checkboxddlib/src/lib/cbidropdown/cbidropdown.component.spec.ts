import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbiDropdown } from './cbidropdown.component';

describe('CbdropdownlistComponent', () => {
  let component: CbiDropdown;
  let fixture: ComponentFixture<CbiDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbiDropdown ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbiDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
