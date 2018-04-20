import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteCommentsComponent } from './write-comments.component';

describe('WriteCommentsComponent', () => {
  let component: WriteCommentsComponent;
  let fixture: ComponentFixture<WriteCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
