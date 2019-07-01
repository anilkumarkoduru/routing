import { TestBed } from '@angular/core/testing';

import { SingleorderserviceService } from './singleorderservice.service';

describe('SingleorderserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleorderserviceService = TestBed.get(SingleorderserviceService);
    expect(service).toBeTruthy();
  });
});
