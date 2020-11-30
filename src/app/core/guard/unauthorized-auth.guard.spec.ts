import { TestBed } from '@angular/core/testing';

import { UnauthorizedAuthGuard } from './unauthorized-auth.guard';

describe('UnauthorizedAuthGuard', () => {
  let guard: UnauthorizedAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnauthorizedAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
