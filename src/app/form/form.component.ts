import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionService } from '../services/question.service';
import { IForm } from '../services/interfaces/iform';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {
  @Input() serverForm: IForm;
  form: FormGroup;
  payLoad = '';
  @Output() save = new EventEmitter<any>();
 
  constructor(private questionService: QuestionService) {  }

  ngOnChanges(): void {
    if (this.serverForm) {
      this.form = this.questionService.convertFormToFormGroup(this.serverForm);
      this.form.valueChanges.subscribe(e => {
        this.serverForm.questions.forEach(q => {
          q.hidden = (q.showOnlyIfHasValue && !e[q.showOnlyIfHasValue]);
        });
      });
    }
  }
 
  onSubmit(): void {
    this.payLoad = JSON.stringify(this.form.value);
    if (!this.form.valid) {
      // Invalid
    }
    else {
      this.save.emit(this.form.value);
    }
  }
}
