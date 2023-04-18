import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { catolicaBookReducer } from './store/catolica/book/reducer';
import { catolicaSearchReducer } from './store/catolica/search/reducer';
import { nationalBookReducer } from './store/national/book/reducer';
import { nationalSearchReducer } from './store/national/search/reducer';
import { ortBookReducer } from './store/ort/book/reducer';
import { ortSearchReducer } from './store/ort/search/reducer';
import { IBooksState, ISearchState } from './store/shared/services';

export interface NationalLibraryState {
    catolicaBooks: IBooksState;
    catolicaSearch: ISearchState;
    books: IBooksState;
    search: ISearchState;
    ortBooks: IBooksState;
    ortSearch: ISearchState;
}

export const reducers: ActionReducerMap<NationalLibraryState> = {
    catolicaBooks: catolicaBookReducer,
    catolicaSearch: catolicaSearchReducer,
    books: nationalBookReducer,
    search: nationalSearchReducer,
    ortBooks: ortBookReducer,
    ortSearch: ortSearchReducer
};

export const NATIONAL_LIBRARY_STATE = '[National Library State]';

export const getState = createFeatureSelector<NationalLibraryState>(NATIONAL_LIBRARY_STATE);