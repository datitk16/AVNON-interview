import { QuestionTypeEnum } from './../enums/question-type.enum';
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
import { setAnswerList } from '../+state/form.actions';
import { Router } from '@angular/router';
import { MatDialogService } from 'src/app/core/services/mat-dialog.service';

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
      answerArray: [
        {
          status: false,
          text: 'Typescript'
        },
        {
          status: false,
          text: 'Python'
        },
        {
          status: false,
          text: 'C#'
        },
      ],
      isOwnAnswer: true,
      isrequied: false
    }
  ];

  questionTypeEnum = QuestionTypeEnum;
  formGroup!: FormGroup;
  languages: string[] = ['Typescript', 'Python', 'C#', 'Other'];
  isAnswer: boolean;
  isData: boolean;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private store: Store<AppState>,
    private router: Router,
    private dialogMessage: MatDialogService,
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
          this.dialog.closeAll();
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
    const arr = this.questionList.filter(item => this.isInvalid(item));
    if (arr.length) {
      this.dialogMessage.showInfoMessage('Check required');
    } else {
      this.store.dispatch(setAnswerList({
        answers: this.questionList.filter(item => {
          if (item.questionType == QuestionTypeEnum.ParagraphAnswer) return item;
          return item.answerArray?.filter(x => x.status)?.length;
        })
      }))
      this.router.navigateByUrl('form/answer')
    }
  }

  description(value: string, index: number) {
    this.questionList[index].text = value;
  }

  private isInvalid(item: Question): boolean {
    if (item.isrequied) {
      if (item.questionType == this.questionTypeEnum.ParagraphAnswer) {
        return !item.text;
      } else {
        return !item.answerArray?.length;
      }
    }
    return false;
  }

}
