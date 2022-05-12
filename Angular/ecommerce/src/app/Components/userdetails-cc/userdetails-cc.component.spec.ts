import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailsCCComponent } from './userdetails-cc.component';

describe('UserdetailsCCComponent', () => {
  let component: UserdetailsCCComponent;
  let fixture: ComponentFixture<UserdetailsCCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdetailsCCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailsCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
