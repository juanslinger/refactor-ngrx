import { Action, ActionReducer } from '@ngrx/store';

import { IBooksState } from '../../shared';
import { BookReducerBase } from '../../shared/ngrx/book/reducer';
import { actions as searchActions } from '../search/action';
import { actions } from './action';

const modifiedBookReducer = (
  reducer: ActionReducer<IBooksState, Action>
): ActionReducer<IBooksState, any> => {
  return (state, action): IBooksState => {
    let modifiedState: IBooksState;

    switch (action.type) {
      case actions.loadBooksSuccess.type:
        modifiedState = {
          ...state,
          data: [
            ...action.data,
            {
              description: 'Override description',
              pages: 100,
              title: 'Override title',
            },
          ],
          isLoading: false,
        };

        break;

      case actions.clearBooks.type:
          modifiedState = {
            ...state,
            data: [],
            isLoading: false
          }

          break;

      default:
          return reducer(state, action);

    }

    return { ...modifiedState };
  };
};

const baseReducer = new BookReducerBase(actions, searchActions).reducer;

export const nationalBookReducer = modifiedBookReducer(baseReducer);