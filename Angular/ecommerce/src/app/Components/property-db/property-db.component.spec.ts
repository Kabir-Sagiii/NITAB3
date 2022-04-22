import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDBComponent } from './property-db.component';

describe('PropertyDBComponent', () => {
  let component: PropertyDBComponent;
  let fixture: ComponentFixture<PropertyDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyDBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
