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
  
  constructor() { }

  ngOnInit() {
  }
  
}
