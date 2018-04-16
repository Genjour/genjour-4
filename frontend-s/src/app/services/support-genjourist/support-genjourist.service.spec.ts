import { TestBed, inject } from '@angular/core/testing';

import { SupportGenjouristService } from './support-genjourist.service';

describe('SupportGenjouristService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupportGenjouristService]
    });
  });

  it('should be created', inject([SupportGenjouristService], (service: SupportGenjouristService) => {
    expect(service).toBeTruthy();
  }));
});
