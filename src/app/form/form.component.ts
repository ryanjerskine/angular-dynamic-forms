import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '../services/question.service';
import { IForm } from '../services/interfaces/iform';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {
  @Input() serverForm: IForm;
  form: FormGroup;
  @Output() save = new EventEmitter<any>();
  sub: Subscription;
 
  constructor(private questionService: QuestionService) {  }

  ngOnChanges(): void {
    if (this.serverForm) {
      this.form = this.questionService.convertFormToFormGroup(this.serverForm);
      this.sub = this.form.valueChanges.subscribe(e => {
        this.serverForm.questions.forEach(q => {
          let hiddenInit = q.hidden ? true : false;
          q.hidden = (q.showOnlyIfHasValue && !e[q.showOnlyIfHasValue]);
          if (hiddenInit !== q.hidden) {
            if (q.hidden) {
              this.form.get(q.key).clearValidators();
              this.form.get(q.key).setValue('');
              this.form.get(q.key).updateValueAndValidity({ emitEvent: false });
            }
            else {
              this.form.get(q.key).setValidators(this.questionService.getValidators(q));
            }
          }
        });
        console.log(this.form);
      });
    }
    else {
      this.serverForm = null;
      if (this.sub) { this.sub.unsubscribe(); }
    }
  }
 
  onSubmit(): void {
    if (!this.form.valid) {
      // Invalid
    }
    else {
      this.save.emit(this.form.value);
    }
  }
}
