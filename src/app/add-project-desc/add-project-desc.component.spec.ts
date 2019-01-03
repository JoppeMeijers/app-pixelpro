import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectDescComponent } from './add-project-desc.component';

describe('AddProjectDescComponent', () => {
  let component: AddProjectDescComponent;
  let fixture: ComponentFixture<AddProjectDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
