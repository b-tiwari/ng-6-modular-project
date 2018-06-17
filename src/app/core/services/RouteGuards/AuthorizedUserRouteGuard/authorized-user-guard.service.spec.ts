import { TestBed, inject } from '@angular/core/testing';

import { AuthorizedUserGuardService } from './authorized-user-guard.service';

describe('AuthorizedUserGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizedUserGuardService]
    });
  });

  it('should be created', inject([AuthorizedUserGuardService], (service: AuthorizedUserGuardService) => {
    expect(service).toBeTruthy();
  }));
});
