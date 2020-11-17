import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldColorComponent } from './field-color.component';

describe('FieldColorComponent', () => {
  let component: FieldColorComponent;
  let fixture: ComponentFixture<FieldColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
