import { createSelector } from '@ngrx/store'

import { getState, NationalLibraryState } from '../../../reducers';

const _getSliceState = createSelector(getState, (state: NationalLibraryState) => state.books);

export const getData = createSelector(_getSliceState, state => state.data);

export const isLoading = createSelector(_getSliceState, state => state.isLoading);