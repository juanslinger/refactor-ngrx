import { Action, createReducer, on } from '@ngrx/store';

import { IBooksState } from '../../services';
import { SearchActionBase } from '../search/action';
import { BookActionBase } from './action';

export const initialState: IBooksState = {
  data: [],
  isLoading: false,
};

export class BookReducerBase {
    constructor(
      private _actions: BookActionBase,
      private _searchActions: SearchActionBase) {}

    public readonly reducer = createReducer<IBooksState, Action>(
        initialState,
        on(this._actions.loadBooks, this._searchActions.searchClick, (state) => {
          return {
            ...state,
            isLoading: true,
          };
        }),
        on(this._actions.loadBooksError, (state) => {
          return {
            ...state,
            isLoading: false,
          };
        }),
        on(this._actions.loadBooksSuccess, (state, { data }) => {
          return {
            ...state,
            data,
            isLoading: false,
          };
        })

    )
}
