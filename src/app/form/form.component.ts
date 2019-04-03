import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionService } from '../services/question.service';
import { IForm } from '../services/interfaces/iform';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {
  @Input()
  serverForm: IForm;
  form: FormGroup;
  payLoad = '';
 
  constructor(private questionService: QuestionService) {  }

  ngOnChanges(): void {
    // Check if the data exists before using it
    if (this.serverForm) {
      this.form = this.questionService.convertFormToFormGroup(this.serverForm);
      console.log(this.form);
    }
  }
 
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
