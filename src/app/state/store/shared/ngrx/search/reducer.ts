import { Action, createReducer, on } from '@ngrx/store';

import { ISearchState } from '../../services';
import { SearchActionBase } from './action';

export const initialState: ISearchState = {
  payload: {}
};

export class SearchReducerBase {
    constructor(private _actions: SearchActionBase) {}

    public readonly reducer = createReducer<ISearchState, Action>(
      initialState,
      on(this._actions.searchClick, (state, { payload }) => {
        return {
          ...state,
          payload
        };
      })
    );
}
