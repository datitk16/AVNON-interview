import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-message-modal',
  templateUrl: './dialog-message-modal.component.html',
  styleUrls: ['./dialog-message-modal.component.scss']
})
export class DialogMessageModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
