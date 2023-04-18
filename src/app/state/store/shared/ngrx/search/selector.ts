import { createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';

import { ISearchState } from '../../services';

export class SearchSelectorBase {
    constructor(
        private _stateSelector: MemoizedSelector<
          any,
          ISearchState,
          DefaultProjectorFn<ISearchState>
        >) {}

    public readonly getPayload = createSelector(this._stateSelector, state => state.payload);
}
