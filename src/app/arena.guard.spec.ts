import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { arenaGuard } from './arena.guard';

describe('arenaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => arenaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
