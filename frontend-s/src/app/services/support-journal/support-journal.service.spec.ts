import { TestBed, inject } from '@angular/core/testing';

import { SupportJournalService } from './support-journal.service';

describe('SupportJournalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupportJournalService]
    });
  });

  it('should be created', inject([SupportJournalService], (service: SupportJournalService) => {
    expect(service).toBeTruthy();
  }));
});
