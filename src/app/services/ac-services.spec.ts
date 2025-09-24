import { TestBed } from '@angular/core/testing';

import { AcServices } from './ac-services';

describe('AcServices', () => {
  let service: AcServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
