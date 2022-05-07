import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyleCComponent } from './ngstyle-c.component';

describe('NgstyleCComponent', () => {
  let component: NgstyleCComponent;
  let fixture: ComponentFixture<NgstyleCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgstyleCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgstyleCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
