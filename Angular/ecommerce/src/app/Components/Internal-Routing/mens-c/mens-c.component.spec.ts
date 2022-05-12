import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensCComponent } from './mens-c.component';

describe('MensCComponent', () => {
  let component: MensCComponent;
  let fixture: ComponentFixture<MensCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
