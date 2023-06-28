import { Question } from './../models/question.model';
import { createAction, props } from '@ngrx/store';

export const setAddNewQuestion = createAction(
  '[Question] Add New Question',
  props<{ question: Question }>()
);

