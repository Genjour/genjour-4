import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportJournalSecondaryComponent } from './support-journal-secondary.component';

describe('SupportJournalSecondaryComponent', () => {
  let component: SupportJournalSecondaryComponent;
  let fixture: ComponentFixture<SupportJournalSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportJournalSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportJournalSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
