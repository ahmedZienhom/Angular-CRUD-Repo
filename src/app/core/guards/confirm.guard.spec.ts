import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { confirmGuard } from './confirm.guard';

describe('confirmGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => confirmGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
