import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplicateComponent } from './replicate.component';

describe('ReplicateComponent', () => {
  let component: ReplicateComponent;
  let fixture: ComponentFixture<ReplicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
