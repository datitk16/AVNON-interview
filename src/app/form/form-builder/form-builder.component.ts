import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from '../../shared/constants';
import { FormQuestionModalComponent } from '../form-question-modal/form-question-modal.component';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  formGroup!: FormGroup;
  languages: string[] = ['Typescript', 'Python', 'C#', 'Other']
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.formGroup = this.fb.group({
      languages: this.fb.array([
      ]),
    });

    this.initializeLanguageForm();
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
