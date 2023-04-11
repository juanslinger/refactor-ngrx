import { createAction, props } from '@ngrx/store';

import { ISearch } from '../../../../shared';

const prefix = '[National][Search]';

export const searchClick = createAction(`${prefix}[Search_Click]`, props<{ payload: ISearch }>());

