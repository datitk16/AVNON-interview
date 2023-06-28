import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {
  @Output() description = new EventEmitter<string>();
  value: string;
  constructor() { }

  onValueChange(event: any) {
    this.description.emit(event)
  }
}
