import { Action, createReducer, on } from '@ngrx/store';

import { ISearch } from '../../../../shared';
import * as actions from './action';

export interface INationalSearchState {
  payload: ISearch;
}

export const initialState: INationalSearchState = {
  payload: {}
};

const reducer = createReducer<INationalSearchState, Action>(
  initialState,
  on(actions.searchClick, (state, { payload }) => {
    return {
      ...state,
      payload
    };
  })
);

export const nationalSearchReducer = (
  state: INationalSearchState | undefined,
  action: Action
): INationalSearchState => reducer(state, action);
