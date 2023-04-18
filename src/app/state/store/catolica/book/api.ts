import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { NationalLibraryModule } from '../../../state.module';
import { BooksHandlerBase } from '../../shared/ngrx/book/api';
import { actions } from './action';
import { selectors } from './selector';

@Injectable()
export class CatolicaBooksHandler extends BooksHandlerBase {
  constructor(public store: Store<NationalLibraryModule>) {
    super(store, actions, selectors);
  }
}
