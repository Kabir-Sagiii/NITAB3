import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchCComponent } from './ngswitch-c.component';

describe('NgswitchCComponent', () => {
  let component: NgswitchCComponent;
  let fixture: ComponentFixture<NgswitchCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgswitchCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswitchCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
