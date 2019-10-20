import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFutureValueComponent } from './view-future-value.component';

describe('ViewFutureValueComponent', () => {
  let component: ViewFutureValueComponent;
  let fixture: ComponentFixture<ViewFutureValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFutureValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFutureValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
