import { BookReducerBase } from '../../shared/ngrx/book/reducer';
import { actions as searchActions } from '../search/action';
import { actions } from './action';

export const catolicaBookReducer = new BookReducerBase(actions, searchActions)
  .reducer;
