import { createSelector } from '@ngrx/store';

import { getState, NationalLibraryState } from '../../../reducers';
import { SearchSelectorBase } from '../../shared/ngrx/search/selector';

const _getSliceState = createSelector(getState, (state: NationalLibraryState) => state.catolicaSearch);

export const selectors = new SearchSelectorBase(_getSliceState);
