import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAreaAlumnComponent } from './personal-area-alumn.component';

describe('PersonalAreaAlumnComponent', () => {
  let component: PersonalAreaAlumnComponent;
  let fixture: ComponentFixture<PersonalAreaAlumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAreaAlumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAreaAlumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
