import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { BooksService } from '../../../../services';
import { SearchActionBase } from '../search/action';
import { BookActionBase } from './action';

@Injectable()
export class NationalBooksEffectsBase {
  constructor(
    public actions$: Actions,
    public _booksService: BooksService,
    public _actions: BookActionBase,
    public _searchActions: SearchActionBase
  ) {}

  loadBooks$ = createEffect(() => {
    const mainAction = this._actions.loadBooks;

    return this.actions$.pipe(
      ofType(mainAction, this._searchActions.searchClick),
      switchMap(() => this._booksService.getAll()),
      map((books) => this._actions.loadBooksSuccess({ data: books })),
      catchError(() => of(this._actions.loadBooksError()))
    );
  });
}
