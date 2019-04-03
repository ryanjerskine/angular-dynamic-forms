import { Component } from '@angular/core';
import { QuestionService } from './services/question.service';
import { Observable } from 'rxjs';
import { IForm } from './services/interfaces/iform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form$: Observable<IForm> = this.service.getQuestionsForm();
 
  constructor(private service: QuestionService) {
    
  }
}
