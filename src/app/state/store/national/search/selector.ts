import { createSelector } from '@ngrx/store'

import { getState, NationalLibraryState } from '../../../reducers';

const _getSliceState = createSelector(getState, (state: NationalLibraryState) => state.search);

export const getPayload = createSelector(_getSliceState, state => state.payload);
