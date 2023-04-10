import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as actions from './action';
import * as selectors from './selector';
import { NationalLibraryModule } from '../../../state.module';
import { IBook } from '../../../../shared';

@Injectable()
export class NationalBooksHandler {
    constructor(private _store: Store<NationalLibraryModule>) {}

    getBooks(): Observable<IBook[]> {
        return this._store.select(selectors.getData)
    }

    isLoading(): Observable<boolean> {
        return this._store.select(selectors.isLoading);
    }

    loadBooks(): void {
        this._store.dispatch(actions.loadBooks());
    }
}