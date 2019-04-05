import { Component, OnInit } from '@angular/core';
import { QuestionService } from './services/question.service';
import { Observable } from 'rxjs';
import { IForm } from './services/interfaces/iform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  id = 1;
  form$: Observable<IForm> = this.service.getQuestionsForm(this.id);
  saved = '';

  constructor(private service: QuestionService) {
    
  }

  ngOnInit(): void {

  }

  onSave(event): void {
    this.id++;
    this.saved += JSON.stringify(event, null, 2) + '\n';
    this.form$ = this.service.getQuestionsForm(this.id);
  }
}
