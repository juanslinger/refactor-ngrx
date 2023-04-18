import { createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';

import { IBooksState } from '../../services';

export class BookSelectorBase {
  constructor(
    private _stateSelector: MemoizedSelector<
      any,
      IBooksState,
      DefaultProjectorFn<IBooksState>
    >
  ) {}

  public readonly getData = createSelector(
    this._stateSelector,
    (state) => state.data
  );

  public readonly isLoading = createSelector(
    this._stateSelector,
    (state) => state.isLoading
  );
}
