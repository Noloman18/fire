import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFutureValueComponent } from './add-future-value.component';

describe('AddFutureValueComponent', () => {
  let component: AddFutureValueComponent;
  let fixture: ComponentFixture<AddFutureValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFutureValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFutureValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
