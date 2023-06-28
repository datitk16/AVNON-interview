import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-form-question-modal',
  templateUrl: './form-question-modal.component.html',
  styleUrls: ['./form-question-modal.component.scss']
})
export class FormQuestionModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

}
