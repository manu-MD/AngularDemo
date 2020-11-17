import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutInComponent } from './layout-in.component';

describe('LayoutInComponent', () => {
  let component: LayoutInComponent;
  let fixture: ComponentFixture<LayoutInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
