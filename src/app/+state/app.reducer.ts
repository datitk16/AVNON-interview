import { Action, createReducer } from '@ngrx/store';

import { AppState } from './app.state';

const initialState: AppState = {
  formState: {} as any,
};

const authenticationReducer = createReducer(
  initialState,
);

export function reducer(state: AppState | undefined, action: Action) {
  return authenticationReducer(state, action);
}
