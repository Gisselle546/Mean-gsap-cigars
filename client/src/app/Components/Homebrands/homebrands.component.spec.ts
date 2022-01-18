import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebrandsComponent } from './homebrands.component';

describe('HomebrandsComponent', () => {
  let component: HomebrandsComponent;
  let fixture: ComponentFixture<HomebrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomebrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
