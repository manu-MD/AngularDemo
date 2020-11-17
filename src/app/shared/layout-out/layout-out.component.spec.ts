import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutOutComponent } from './layout-out.component';

describe('LayoutOutComponent', () => {
  let component: LayoutOutComponent;
  let fixture: ComponentFixture<LayoutOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
