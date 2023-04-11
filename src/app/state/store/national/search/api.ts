import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as actions from './action';
import * as selectors from './selector';
import { NationalLibraryModule } from '../../../state.module';
import { ISearch } from '../../../../shared';

@Injectable()
export class NationalSearchHandler {
    constructor(private _store: Store<NationalLibraryModule>) {}

    getPayload(): Observable<ISearch> {
        return this._store.select(selectors.getPayload)
    }

    searchClick(payload: ISearch): void {
        this._store.dispatch(actions.searchClick({ payload }));
    }
}