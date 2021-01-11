import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInUserComponent } from './login-in-user.component';

describe('LoginInUserComponent', () => {
  let component: LoginInUserComponent;
  let fixture: ComponentFixture<LoginInUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginInUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
