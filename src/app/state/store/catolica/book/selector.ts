import { createSelector } from '@ngrx/store';

import { getState, NationalLibraryState } from '../../../reducers';
import { BookSelectorBase } from '../../shared/ngrx/book/selector';

const _getSliceState = createSelector(getState, (state: NationalLibraryState) => state.catolicaBooks);

export const selectors = new BookSelectorBase(_getSliceState);