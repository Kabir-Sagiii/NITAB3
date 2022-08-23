import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADummyComponent } from './adummy.component';

describe('ADummyComponent', () => {
  let component: ADummyComponent;
  let fixture: ComponentFixture<ADummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADummyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ADummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
