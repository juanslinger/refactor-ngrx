import { createAction, props } from '@ngrx/store';

import { IBook } from '../../../../shared';

const prefix = '[National][Book]';

export const loadBooks = createAction(`${prefix}[Load_Books]`);

export const loadBooksSuccess = createAction(`${prefix}[Load_Books_Success]`, props<{ data: IBook[] }>());

export const loadBooksError = createAction(`${prefix}[Load_Books_Error]`);
