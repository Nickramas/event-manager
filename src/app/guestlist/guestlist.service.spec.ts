import { TestBed } from '@angular/core/testing';

import { GuestlistService } from './guestlist.service';

describe('GuestlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuestlistService = TestBed.get(GuestlistService);
    expect(service).toBeTruthy();
  });
});
