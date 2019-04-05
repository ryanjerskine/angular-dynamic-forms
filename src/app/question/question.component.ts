import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IQuestion } from '../services/interfaces/iquestion';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: IQuestion;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
  get errorMessage() {
    const errors = this.form.controls[this.question.key].errors;
    if (errors['required']) {
      return `${this.question.label} is <strong>required</strong>.`;
    }
    else if (errors['email']) {
      return `That is not a valid <strong>email address</strong>.`;
    }
    else if (errors['minlength']) {
      return `${this.question.label} must be <strong>at least ${errors['minlength'].requiredLength}</strong> characters.`;
    }
    else if (errors['maxlength']) {
      return `${this.question.label} must be <strong>fewer than ${errors['maxlength'].requiredLength+1}</strong> characters.`;
    }
    return `${this.question.label} is <strong>invalid</strong>.`;
  }
  
  constructor() { }

  ngOnInit() {
  }
  
}
