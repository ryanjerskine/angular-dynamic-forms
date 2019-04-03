import { IQuestion } from './iquestion';

export interface IForm {
  id: number;
  questions: IQuestion[];
}