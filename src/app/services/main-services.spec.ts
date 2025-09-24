import { TestBed } from '@angular/core/testing';

import { MainServices } from './main-services';

describe('MainServices', () => {
  let service: MainServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
