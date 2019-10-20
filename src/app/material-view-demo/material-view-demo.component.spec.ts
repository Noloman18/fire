import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialViewDemoComponent } from './material-view-demo.component';

describe('MaterialViewDemoComponent', () => {
  let component: MaterialViewDemoComponent;
  let fixture: ComponentFixture<MaterialViewDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialViewDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialViewDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
