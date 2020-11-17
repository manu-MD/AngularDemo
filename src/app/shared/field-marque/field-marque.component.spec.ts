import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldMarqueComponent } from './field-marque.component';

describe('FieldMarqueComponent', () => {
  let component: FieldMarqueComponent;
  let fixture: ComponentFixture<FieldMarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldMarqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
