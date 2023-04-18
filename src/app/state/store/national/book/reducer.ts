import { BookReducerBase } from '../../shared/ngrx/book/reducer';
import { actions as searchActions } from '../search/action';
import { actions } from './action';

export const nationalBookReducer = new BookReducerBase(actions, searchActions)
  .reducer;
