import { MatDialogService } from './../../core/services/mat-dialog.service';
import { Answer, Question } from './../models/question.model';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/+state/app.state';
import { setAddNewQuestion } from '../+state/form.actions';
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

  constructor(
    private dialogMessage: MatDialogService,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      questionType: ['CheckBoxList', [Validators.required]],
      title: [null, Validators.required],
      answerArray: this.formBuilder.array([]),
      isrequied: [false],
      isOwnAnswer: [false]
    });

    this.initializeLanguageForm();

    this.formGroup.get('questionType')?.valueChanges.subscribe((res: string) => {
      if (res == QuestionTypeEnum.ParagraphAnswer) {
        this.isCheckBoxList = true;
      } else {
        this.isCheckBoxList = false;
      }
    })

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
      if (this.formGroup.value.questionType === 'CheckBoxList' && !this.formGroup.value.answerArray.length) {
        this.dialogMessage.showInfoMessage('Add Answer Option');
        return;
      }
      const question = new Question();
      question.title = this.formGroup.value.title;
      question.questionType = this.formGroup.value.questionType;
      question.answerArray = (this.formGroup.value.answerArray as string[]).map(x => {
        return {
          status: false,
          text: x
        } as Answer;
      });
      question.isOwnAnswer = this.formGroup.value.isOwnAnswer;
      question.isrequied = this.formGroup.value.isrequied;
      this.store.dispatch(setAddNewQuestion({ question: question }));
    } else {
      this.dialogMessage.showInfoMessage('Invalid');
    }
  }

  get answerArray(): FormArray {
    return this.formGroup.get('answerArray') as FormArray;
  }
}
