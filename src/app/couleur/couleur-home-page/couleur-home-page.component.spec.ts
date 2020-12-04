import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouleurHomePageComponent } from './couleur-home-page.component';

describe('CouleurHomePageComponent', () => {
  let component: CouleurHomePageComponent;
  let fixture: ComponentFixture<CouleurHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouleurHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouleurHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
