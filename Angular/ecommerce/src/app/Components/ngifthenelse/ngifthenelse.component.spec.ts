import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifthenelseComponent } from './ngifthenelse.component';

describe('NgifthenelseComponent', () => {
  let component: NgifthenelseComponent;
  let fixture: ComponentFixture<NgifthenelseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifthenelseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifthenelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
