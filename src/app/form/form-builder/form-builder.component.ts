import { QuestionTypeEnum } from './../enums/question-type.enum';
import { QuestionType } from './../models/question-type.model';
import { Question } from './../models/question.model';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/+state/app.state';
import { Constants } from '../../shared/constants';
import { FormQuestionModalComponent } from '../form-question-modal/form-question-modal.component';
import { Subject, takeUntil } from 'rxjs';
import { selectAddQuestion } from '../+state/form.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { setAnswerList } from '../+state/form.actions';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  private _unsubscribeAll: Subject<void> = new Subject<void>();

  questionList: Question[] = [
    {
      questionType: QuestionTypeEnum.ParagraphAnswer,
      title: 'Please tell us about yourself',
      text: '',
      isOwnAnswer: false,
      isrequied: true
    },
    {
      questionType: QuestionTypeEnum.CheckBoxList,
      title: 'Please select the languages you know',
      // 'Typescript', 'Python', 'C#', 'Other'
      answerArray: [
        {
          status: false,
          text: 'Typescript'
        },
        {
          status: false,
          text: 'Typescript'
        },
        {
          status: false,
          text: 'Typescript'
        },
        {
          status: false,
          text: 'Typescript'
        }],
      isOwnAnswer: false,
      isrequied: false
    }
  ];

  questionTypeEnum = QuestionTypeEnum;
  formGroup!: FormGroup;
  languages: string[] = ['Typescript', 'Python', 'C#', 'Other'];
  isAnswer: boolean;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private store: Store<AppState>,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      languages: this.fb.array([
      ])
    });

    this.initializeLanguageForm();

    this.store.select(selectAddQuestion)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res: Question) => {
        if (Object.keys(res).length !== 0) {
          const data = JSON.stringify(res)
          this.questionList.push({ ...JSON.parse(data) })
        }
      });
  }

  initializeLanguageForm() {
    const languageArray = this.formGroup.get('languages') as FormArray;
    this.languages.forEach(language => {
      languageArray.push(this.fb.control(language));
    });
  }

  addNewQuestion() {
    this.dialog.open(FormQuestionModalComponent, {
      width: Constants.modalWith,
    });
  }

  reviewMyAnswers() {
    this.store.dispatch(setAnswerList({ answers: this.questionList }))
    this.router.navigateByUrl('form/answer')
  }

  description(value: string, index: number) {
    this.questionList[index].text = value;
  }

}
