import { createAction, props } from '@ngrx/store';

import { ISearch } from '../../../../../shared';

export class SearchActionBase {
    constructor(private _prefix: string) {}

    public readonly searchClick = createAction(`${this._prefix}[Search_Click]`, props<{ payload: ISearch }>());
}


