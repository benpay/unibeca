import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancedProjectsComponent } from './financed-projects.component';

describe('FinancedProjectsComponent', () => {
  let component: FinancedProjectsComponent;
  let fixture: ComponentFixture<FinancedProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancedProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
