import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplicateSecondaryComponent } from './replicate-secondary.component';

describe('ReplicateSecondaryComponent', () => {
  let component: ReplicateSecondaryComponent;
  let fixture: ComponentFixture<ReplicateSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplicateSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplicateSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
