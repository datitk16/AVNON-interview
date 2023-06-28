import { FormState } from './form.state';
import { createSelector } from '@ngrx/store';

import { AppState } from '../../+state/app.state';

export const selectFormState = (state: AppState) => state.formState;

export const selectAddQuestion = createSelector(
  selectFormState,
  (state: FormState) => state.question
);


export const selectAnswers = createSelector(
  selectFormState,
  (state: FormState) => state.answers
);

