import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

import { BooksService } from '../../../services';
import { NationalBooksEffectsBase } from '../../shared/ngrx/book/effect';
import { actions as searchActions } from '../search/action';
import { actions } from './action';

@Injectable()
export class NationalBooksEffects extends NationalBooksEffectsBase {
  constructor(
    actions$: Actions,
    public booksService: BooksService
  ) {
    super(actions$, booksService, actions, searchActions)
  }
}
