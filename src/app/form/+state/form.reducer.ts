import { Question } from './../models/question.model';
import { Action, createReducer, on } from '@ngrx/store';

import { FormState } from './form.state';
import { setAddNewQuestion, setAnswerList } from './form.actions';

const initialState: FormState = {
  question: new Question,
  answers: new Array
};

const formReducer = createReducer(
  initialState,
  on(setAddNewQuestion, (state, action) => ({
    ...state,
    question: action.question
  })),
  on(setAnswerList, (state, action) => ({
    ...state,
    answers: action.answers
  })),
);

export function reducer(state: FormState | undefined, action: Action) {
  return formReducer(state, action);
}
