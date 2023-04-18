import { createAction, props } from '@ngrx/store';

import { IBook } from '../../../../../shared';

export class BookActionBase {
  constructor(private _prefix: string) {}

  public readonly loadBooks = createAction(`${this._prefix}[Load_Books]`);

  public readonly loadBooksSuccess = createAction(
    `${this._prefix}[Load_Books_Success]`,
    props<{ data: IBook[] }>()
  );

  public readonly loadBooksError = createAction(
    `${this._prefix}[Load_Books_Error]`
  );
}
