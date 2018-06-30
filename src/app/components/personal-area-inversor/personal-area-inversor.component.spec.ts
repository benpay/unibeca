import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAreaInversorComponent } from './personal-area-inversor.component';

describe('PersonalAreaInversorComponent', () => {
  let component: PersonalAreaInversorComponent;
  let fixture: ComponentFixture<PersonalAreaInversorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAreaInversorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAreaInversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
