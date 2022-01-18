import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CigardetailsComponent } from './cigardetails.component';

describe('CigardetailsComponent', () => {
  let component: CigardetailsComponent;
  let fixture: ComponentFixture<CigardetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CigardetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CigardetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
