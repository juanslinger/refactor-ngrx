import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { NationalLibraryModule } from '../../../state.module';
import { SearchHandlerBase } from '../../shared/ngrx/search/api';
import { actions } from './action';
import { selectors } from './selector';

@Injectable()
export class CatolicaSearchHandler extends SearchHandlerBase {
  constructor(public store: Store<NationalLibraryModule>) {
    super(store, actions, selectors);
  }
}
