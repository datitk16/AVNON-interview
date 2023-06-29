import { selectAnswers } from './../+state/form.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/+state/app.state';
import { QuestionTypeEnum } from '../enums/question-type.enum';
import { Question } from '../models/question.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-form-answers',
  templateUrl: './form-answers.component.html',
  styleUrls: ['./form-answers.component.scss']
})
export class FormAnswersComponent implements OnInit {

  private _unsubscribeAll: Subject<void> = new Subject<void>();
  questionTypeEnum = QuestionTypeEnum;
  questionList: Question[] = [
  ];
  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {

    this.store.select(selectAnswers)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res: Question[]) => {
        this.questionList = res;
      });
  }

}
