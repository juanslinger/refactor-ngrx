import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { BooksService } from '../../../services';
import { BooksEffectsBase } from '../../shared/ngrx/book/effect';
import { actions as searchActions } from '../search/action';
import { actions } from './action';

@Injectable()
export class NationalBooksEffects extends BooksEffectsBase {
  constructor(
    actions$: Actions,
    public booksService: BooksService
  ) {
    super(actions$, booksService, actions, searchActions)
  }

  override loadBooks$ = createEffect(() => {
    const mainAction = actions.loadBooks;

    return this.actions$.pipe(
      ofType(mainAction, searchActions.searchClick),
      switchMap(() => {
        console.warn('National Book Effect');
        return this._booksService.getNewBooks();
      }),
      map((books) => actions.loadBooksSuccess({ data: books })),
      catchError(() => of(actions.loadBooksError()))
    );
  });
}
