import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkSecondaryComponent } from './bookmark-secondary.component';

describe('BookmarkSecondaryComponent', () => {
  let component: BookmarkSecondaryComponent;
  let fixture: ComponentFixture<BookmarkSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
