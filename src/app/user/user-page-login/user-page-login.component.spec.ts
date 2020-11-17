import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageLoginComponent } from './user-page-login.component';

describe('UserPageLoginComponent', () => {
  let component: UserPageLoginComponent;
  let fixture: ComponentFixture<UserPageLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
