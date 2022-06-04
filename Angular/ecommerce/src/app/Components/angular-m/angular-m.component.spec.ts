import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMComponent } from './angular-m.component';

describe('AngularMComponent', () => {
  let component: AngularMComponent;
  let fixture: ComponentFixture<AngularMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
