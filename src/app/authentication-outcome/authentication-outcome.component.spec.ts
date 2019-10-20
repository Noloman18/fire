import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationOutcomeComponent } from './authentication-outcome.component';

describe('AuthenticationOutcomeComponent', () => {
  let component: AuthenticationOutcomeComponent;
  let fixture: ComponentFixture<AuthenticationOutcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationOutcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
