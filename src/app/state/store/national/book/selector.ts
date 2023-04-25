import { createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';

import { getState, NationalLibraryState } from '../../../reducers';
import { IBooksState } from '../../shared';
import { BookSelectorBase } from '../../shared/ngrx/book/selector';

const _getSliceState = createSelector(getState, (state: NationalLibraryState) => state.books);

class NewBooksSelector extends BookSelectorBase {
    constructor(public stateSelector: MemoizedSelector<
        any,
        IBooksState,
        DefaultProjectorFn<IBooksState>
      >){
        super(stateSelector);
    }

    public override getData = createSelector(
        this.stateSelector,
        (state) => [...state.data, { description: 'New Description from selector', pages: 1000, title: 'Title from Selector' }]
      );
}

export const selectors = new NewBooksSelector(_getSliceState);
