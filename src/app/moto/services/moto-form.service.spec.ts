import { TestBed } from '@angular/core/testing';

import { MotoFormService } from './moto-form.service';

describe('MotoFormService', () => {
  let service: MotoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotoFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
