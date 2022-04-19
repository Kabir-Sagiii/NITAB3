import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapBComponent } from './bootstrap-b.component';

describe('BootstrapBComponent', () => {
  let component: BootstrapBComponent;
  let fixture: ComponentFixture<BootstrapBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
