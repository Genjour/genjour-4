import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsSecondaryComponent } from './comments-secondary.component';

describe('CommentsSecondaryComponent', () => {
  let component: CommentsSecondaryComponent;
  let fixture: ComponentFixture<CommentsSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
