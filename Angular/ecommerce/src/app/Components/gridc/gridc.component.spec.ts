import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridcComponent } from './gridc.component';

describe('GridcComponent', () => {
  let component: GridcComponent;
  let fixture: ComponentFixture<GridcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
