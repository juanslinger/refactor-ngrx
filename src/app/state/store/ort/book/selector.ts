import { createSelector } from '@ngrx/store';

import { getState, NationalLibraryState } from '../../../reducers';
import { BookSelectorBase } from '../../shared/ngrx/book/selector';

const _getSliceState = createSelector(getState, (state: NationalLibraryState) => state.ortBooks);

export const selectors = new BookSelectorBase(_getSliceState);