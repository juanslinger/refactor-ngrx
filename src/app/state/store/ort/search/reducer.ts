import { SearchReducerBase } from '../../shared/ngrx/search/reducer';
import { actions } from './action';

export const ortSearchReducer = new SearchReducerBase(actions).reducer;
