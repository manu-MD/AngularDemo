import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueHomePageComponent } from './marque-home-page.component';

describe('MarqueHomePageComponent', () => {
  let component: MarqueHomePageComponent;
  let fixture: ComponentFixture<MarqueHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqueHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
