import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensCComponent } from './womens-c.component';

describe('WomensCComponent', () => {
  let component: WomensCComponent;
  let fixture: ComponentFixture<WomensCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
