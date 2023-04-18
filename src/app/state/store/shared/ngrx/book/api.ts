import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IBook } from '../../../../../shared';
import { NationalLibraryModule } from '../../../../state.module';
import { IBookHandler } from '../../services';
import { BookActionBase } from './action';
import { BookSelectorBase } from './selector';

@Injectable()
export class BooksHandlerBase implements IBookHandler {
  constructor(
    private _store: Store<NationalLibraryModule>,
    private _actions: BookActionBase,
    private _selectors: BookSelectorBase
  ) {}

  getBooks(): Observable<IBook[]> {
    return this._store.select(this._selectors.getData);
  }

  isLoading(): Observable<boolean> {
    return this._store.select(this._selectors.isLoading);
  }

  loadBooks(): void {
    this._store.dispatch(this._actions.loadBooks());
  }
}
