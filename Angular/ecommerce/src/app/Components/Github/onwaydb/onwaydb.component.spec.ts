import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnwaydbComponent } from './onwaydb.component';

describe('OnwaydbComponent', () => {
  let component: OnwaydbComponent;
  let fixture: ComponentFixture<OnwaydbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnwaydbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnwaydbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
