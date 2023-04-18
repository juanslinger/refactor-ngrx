import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { nationalBookReducer } from './store/national/book/reducer';
import { nationalSearchReducer } from './store/national/search/reducer';
import { IBooksState, ISearchState } from './store/shared/services';

export interface NationalLibraryState {
    books: IBooksState;
    search: ISearchState;
}

export const reducers: ActionReducerMap<NationalLibraryState> = {
    books: nationalBookReducer,
    search: nationalSearchReducer
};

export const NATIONAL_LIBRARY_STATE = '[National Library State]';

export const getState = createFeatureSelector<NationalLibraryState>(NATIONAL_LIBRARY_STATE);