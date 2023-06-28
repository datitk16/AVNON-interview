import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQuestionModalComponent } from './form-question-modal.component';

describe('FormQuestionModalComponent', () => {
  let component: FormQuestionModalComponent;
  let fixture: ComponentFixture<FormQuestionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormQuestionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormQuestionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
