import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BooksService } from '../../../services';
import { loadBooks, loadBooksError, loadBooksSuccess } from './action';
import * as searchActions from '../search/action';

@Injectable()
export class NationalBooksEffects {
  constructor(
    private _actions$: Actions,
    private _booksService: BooksService
  ) {}

  loadBooks$ = createEffect(() => {
    const mainAction = loadBooks;

    return this._actions$.pipe(
      ofType(mainAction, searchActions.searchClick),
      switchMap(() => this._booksService.getAll()),
      map((books) => loadBooksSuccess({ data: books })),
      catchError(() => of(loadBooksError()))
    );
  });
}
