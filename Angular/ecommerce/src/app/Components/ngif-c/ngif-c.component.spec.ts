import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifCComponent } from './ngif-c.component';

describe('NgifCComponent', () => {
  let component: NgifCComponent;
  let fixture: ComponentFixture<NgifCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
