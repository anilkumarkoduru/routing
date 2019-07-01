import { TestBed } from '@angular/core/testing';

import { MultipleorderService } from './multipleorder.service';

describe('MultipleorderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultipleorderService = TestBed.get(MultipleorderService);
    expect(service).toBeTruthy();
  });
});
