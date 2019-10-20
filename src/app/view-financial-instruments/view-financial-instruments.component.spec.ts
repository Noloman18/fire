import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFinancialInstrumentsComponent } from './view-financial-instruments.component';

describe('ViewFinancialInstrumentsComponent', () => {
  let component: ViewFinancialInstrumentsComponent;
  let fixture: ComponentFixture<ViewFinancialInstrumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFinancialInstrumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFinancialInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
