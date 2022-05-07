import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassCComponent } from './ngclass-c.component';

describe('NgclassCComponent', () => {
  let component: NgclassCComponent;
  let fixture: ComponentFixture<NgclassCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgclassCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgclassCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
