import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { IForm } from './interfaces/iform';
import { HttpClient } from '@angular/common/http';
import { IQuestion } from './interfaces/iquestion';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  
  constructor(private http: HttpClient) { }

  convertFormToFormGroup(form: IForm) {
    let group: any = {};
    form.questions.forEach(q => {
      let validators: ValidatorFn[] = q.hidden ? [] : this.getValidators(q);
      group[q.key] = new FormControl(q.value || '', validators);
    });
    return new FormGroup(group);
  }
  getQuestionsForm(id: number): Observable<IForm> {
    return this.http.get<IForm>(`/assets/json/fake-form-${id}.json`);
  }

  getValidators(question: IQuestion): ValidatorFn[] {
    let validators: ValidatorFn[] = [];
    question.validators.forEach(v => {
      if (v.type === 'required') { validators.push(Validators.required); }
      else if (v.type === 'email') { validators.push(Validators.email); }
      else if (v.type === 'min') { validators.push(Validators.min(v.value)); }
      else if (v.type === 'max') { validators.push(Validators.max(v.value)); }
      else if (v.type === 'minLength') { validators.push(Validators.minLength(v.value)); }
      else if (v.type === 'maxLength') { validators.push(Validators.maxLength(v.value)); }
      else if (v.type === 'pattern') { validators.push(Validators.pattern(v.value)); }
    });
    return validators;
  }
}
