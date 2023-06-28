import { Question } from '../models/question.model';
export interface FormState {
  question: Question;
  answers: Question[]
}
