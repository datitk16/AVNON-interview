import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionTypeEnum } from '../enums/question-type.enum';
@Component({
  selector: 'app-form-question-modal',
  templateUrl: './form-question-modal.component.html',
  styleUrls: ['./form-question-modal.component.scss']
})
export class FormQuestionModalComponent implements OnInit {
  formGroup!: FormGroup;
  answerOption: string[] = [];
  questionTypes = QuestionTypeEnum;
  isCheckBoxList: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      questionType: ['CheckBoxlist', [Validators.required]],
      title: [null, Validators.required],
      answerArray: this.formBuilder.array([])
    });

    this.initializeLanguageForm();

    this.formGroup.get('questionType')?.valueChanges.subscribe((res: string) => {
      if (res == QuestionTypeEnum.ParagraphAnswer) {
        this.isCheckBoxList = true;
      } else {
        this.isCheckBoxList = false;
      }
    })

    console.log(this.formGroup.value)
  }

  initializeLanguageForm() {
    const languageArray = this.formGroup.get('answerArray') as FormArray;
    this.answerOption.forEach(language => {
      languageArray.push(this.formBuilder.control(language));
    });
  }

  addAnswer() {
    const newLanguageControl = this.formBuilder.control('');
    this.answerArray.push(newLanguageControl);
  }

  submitForm() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    }
  }

  get answerArray(): FormArray {
    return this.formGroup.get('answerArray') as FormArray;
  }
}
