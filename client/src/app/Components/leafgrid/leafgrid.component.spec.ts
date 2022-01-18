import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafgridComponent } from './leafgrid.component';

describe('LeafgridComponent', () => {
  let component: LeafgridComponent;
  let fixture: ComponentFixture<LeafgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeafgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
