import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { nationalBooksReducer, INationalBooksState } from './store/national/book/reducer';

export interface NationalLibraryState {
    books: INationalBooksState;
}

export const reducers: ActionReducerMap<NationalLibraryState> = {
    books: nationalBooksReducer
};

export const NATIONAL_LIBRARY_STATE = '[National Library State]';

export const getState = createFeatureSelector<NationalLibraryState>(NATIONAL_LIBRARY_STATE);