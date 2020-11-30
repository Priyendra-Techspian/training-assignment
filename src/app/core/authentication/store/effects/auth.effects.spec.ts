import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { Authentication\store\effects\AuthEffects } from './authentication\store\effects\auth.effects';

describe('Authentication\store\effects\AuthEffects', () => {
  let actions$: Observable<any>;
  let effects: Authentication\store\effects\AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Authentication\store\effects\AuthEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(Authentication\store\effects\AuthEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
