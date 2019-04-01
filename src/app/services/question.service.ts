import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn } from '@angular/forms';
import { QuestionBase } from '../models/question-base';
import { TextboxQuestion } from '../models/textbox-question';
import { DropdownQuestion } from '../models/dropdown-question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      let validatorsArray: ValidatorFn[] = [];
      if (question.validators.indexOf('required') > -1) {
        validatorsArray.push(Validators.required);
      }
      if (question.validators.indexOf('email') > -1) {
        validatorsArray.push(Validators.email);
      }
      group[question.key] = new FormControl(question.value || '', validatorsArray);
    });
    return new FormGroup(group);
  }

  // TODO: Use in-memory API to get/save from service
  getQuestions() {
 
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: '',
        order: 0,
        validators: ['required']
      }),
      new TextboxQuestion({
        key: 'middleInitial',
        label: 'Middle Initial',
        value: '',
        order: 1
      }),
      new TextboxQuestion({
        key: 'lastName',
        label: 'Last Name',
        value: '',
        required: true,
        order: 2,
        validators: ['required']
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email Address',
        type: 'email',
        order: 3,
        validators: ['required', 'email']
      }),
      new TextboxQuestion({
        key: 'phoneNumber',
        label: 'Phone Number',
        type: 'text',
        order: 4,
        validators: [] // TODO: Add phone validator
      }),
      new DropdownQuestion({
        key: 'phoneNumberType',
        label: 'Phone Number Type',
        options: [
          {key: 'mobile',  value: 'Mobile'},
          {key: 'home',  value: 'Home'},
          {key: 'work',   value: 'Work'},
          {key: 'other', value: 'Other'}
        ],
        order: 5,
        validators: [] // TODO: Add conditional validator based on if 'phone' has a value
      })
    ];
 
    return questions.sort((a, b) => a.order - b.order);
  }
}
