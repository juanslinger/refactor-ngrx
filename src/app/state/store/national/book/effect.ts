import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { BooksService } from '../../../services';
import { loadBooks, loadBooksError, loadBooksSuccess } from './action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class NationalBooksEffects {
    constructor(
        private _actions$: Actions,
        private _booksService: BooksService
    ) {}

    loadBooks$ = createEffect(() => {
        const mainAction = loadBooks;

        return this._actions$.pipe(
            ofType(mainAction),
            switchMap(() => this._booksService.getAll()),
            map(books => loadBooksSuccess({ data: books })),
            catchError(() => of(loadBooksError()))
        );
    });
}