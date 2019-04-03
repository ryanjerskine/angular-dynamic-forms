import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { IForm } from './interfaces/iform';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  
  constructor(private http: HttpClient) { }

  convertFormToFormGroup(form: IForm) {
    let group: any = {};
    form.questions.forEach(q => {
      let validators: ValidatorFn[] = [];
      if (q.validators && q.validators.indexOf('required') > -1) {
        validators.push(Validators.required);
      }
      if (q.validators && q.validators.indexOf('email') > -1) {
        validators.push(Validators.email);
      }
      group[q.key] = new FormControl(q.value || '', validators);
    });
    return new FormGroup(group);
  }
  getQuestionsForm(): Observable<IForm> {
    return this.http.get<IForm>('/assets/json/fake-form-1.json');
  }
}
