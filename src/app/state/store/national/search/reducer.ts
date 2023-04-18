import { SearchReducerBase } from '../../shared/ngrx/search/reducer';
import { actions } from './action';

export const nationalSearchReducer = new SearchReducerBase(actions).reducer;
