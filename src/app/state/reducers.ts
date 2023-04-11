import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { nationalBooksReducer, INationalBooksState } from './store/national/book/reducer';
import { nationalSearchReducer, INationalSearchState } from './store/national/search/reducer';

export interface NationalLibraryState {
    books: INationalBooksState;
    search: INationalSearchState;
}

export const reducers: ActionReducerMap<NationalLibraryState> = {
    books: nationalBooksReducer,
    search: nationalSearchReducer
};

export const NATIONAL_LIBRARY_STATE = '[National Library State]';

export const getState = createFeatureSelector<NationalLibraryState>(NATIONAL_LIBRARY_STATE);