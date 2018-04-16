import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportGenjouristComponent } from './support-genjourist.component';

describe('SupportGenjouristComponent', () => {
  let component: SupportGenjouristComponent;
  let fixture: ComponentFixture<SupportGenjouristComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportGenjouristComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportGenjouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
