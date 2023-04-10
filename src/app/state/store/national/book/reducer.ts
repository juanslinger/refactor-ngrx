import { Action, createReducer, on } from '@ngrx/store';

import { IBook } from '../../../../shared';
import * as actions from './action';

export interface INationalBooksState {
  data: IBook[];
  isLoading: boolean;
}

export const initialState: INationalBooksState = {
  data: [],
  isLoading: false,
};

const reducer = createReducer<INationalBooksState, Action>(
  initialState,
  on(actions.loadBooks, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(actions.loadBooksError, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(actions.loadBooksSuccess, (state, { data }) => {
    return {
      ...state,
      data,
      isLoading: false,
    };
  })
);

export const nationalBooksReducer = (
  state: INationalBooksState | undefined,
  action: Action
): INationalBooksState => reducer(state, action);
