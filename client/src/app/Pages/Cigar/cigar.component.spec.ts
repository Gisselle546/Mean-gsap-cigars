import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CigarComponent } from './cigar.component';

describe('CigarComponent', () => {
  let component: CigarComponent;
  let fixture: ComponentFixture<CigarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CigarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CigarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
