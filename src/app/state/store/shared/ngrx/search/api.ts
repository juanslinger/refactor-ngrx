import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ISearch } from '../../../../../shared';
import { NationalLibraryModule } from '../../../../state.module';
import { ISearchHandler } from '../../services';
import { SearchActionBase } from './action';
import { SearchSelectorBase } from './selector';

@Injectable()
export class SearchHandlerBase implements ISearchHandler {
  constructor(
    private _store: Store<NationalLibraryModule>,
    private _actions: SearchActionBase,
    private _selectors: SearchSelectorBase
  ) {}

  getPayload(): Observable<ISearch> {
    return this._store.select(this._selectors.getPayload);
  }

  searchClick(payload: ISearch): void {
    this._store.dispatch(this._actions.searchClick({ payload }));
  }
}
