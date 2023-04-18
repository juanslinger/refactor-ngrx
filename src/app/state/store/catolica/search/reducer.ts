import { SearchReducerBase } from '../../shared/ngrx/search/reducer';
import { actions } from './action';

export const catolicaSearchReducer = new SearchReducerBase(actions).reducer;
