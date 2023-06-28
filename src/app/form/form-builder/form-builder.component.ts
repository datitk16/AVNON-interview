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

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  private _unsubscribeAll: Subject<void> = new Subject<void>();

  formGroup!: FormGroup;
  languages: string[] = ['Typescript', 'Python', 'C#', 'Other'];


  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private store: Store<AppState>,
  ) { }


  ngOnInit(): void {
    this.formGroup = this.fb.group({
      languages: this.fb.array([
      ]),
    });

    this.initializeLanguageForm();
    this.addNewQuestion();

    this.store.select(selectAddQuestion)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res) => {
        console.log(res)
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

}
