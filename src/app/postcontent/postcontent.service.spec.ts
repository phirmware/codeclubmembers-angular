import { TestBed } from '@angular/core/testing';

import { PostcontentService } from './postcontent.service';

describe('PostcontentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostcontentService = TestBed.get(PostcontentService);
    expect(service).toBeTruthy();
  });
});
