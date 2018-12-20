import { TestBed } from '@angular/core/testing';

import { ScServiceService } from './sc-service.service';

describe('ScServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScServiceService = TestBed.get(ScServiceService);
    expect(service).toBeTruthy();
  });
});
