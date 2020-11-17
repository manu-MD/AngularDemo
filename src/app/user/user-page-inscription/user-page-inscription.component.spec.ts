import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageInscriptionComponent } from './user-page-inscription.component';

describe('UserPageInscriptionComponent', () => {
  let component: UserPageInscriptionComponent;
  let fixture: ComponentFixture<UserPageInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPageInscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
