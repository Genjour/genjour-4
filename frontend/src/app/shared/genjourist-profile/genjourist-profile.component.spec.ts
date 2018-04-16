import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenjouristProfileComponent } from './genjourist-profile.component';

describe('GenjouristProfileComponent', () => {
  let component: GenjouristProfileComponent;
  let fixture: ComponentFixture<GenjouristProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenjouristProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenjouristProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
