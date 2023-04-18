import { createSelector } from '@ngrx/store';

import { getState, NationalLibraryState } from '../../../reducers';
import { SearchSelectorBase } from '../../shared/ngrx/search/selector';

const _getSliceState = createSelector(getState, (state: NationalLibraryState) => state.search);

export const selectors = new SearchSelectorBase(_getSliceState);
