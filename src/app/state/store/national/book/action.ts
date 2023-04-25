import { createAction } from '@ngrx/store';

import { BookActionBase } from '../../shared/ngrx/book/action';

export class NationalBookActions extends BookActionBase {
    constructor(private _newPrefix: string) {
        super(_newPrefix);
    }

    public readonly clearBooks = createAction(`${this._newPrefix}[Clear_Books]`);
}

export const actions = new NationalBookActions('[National][Book]');
