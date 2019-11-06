import { TestBed } from '@angular/core/testing';

import { CreatepostService } from './createpost.service';

describe('CreatepostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatepostService = TestBed.get(CreatepostService);
    expect(service).toBeTruthy();
  });
});
