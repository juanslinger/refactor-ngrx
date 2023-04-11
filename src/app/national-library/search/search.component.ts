import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NationalLibraryStateHandler } from '../../state';
import { ISearch } from '../../shared';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class NationalLibrarySearchComponent implements OnInit, OnDestroy {
    public titleControl = new FormControl('');

    private _dispose$ = new Subject<void>();

    constructor(private _state: NationalLibraryStateHandler) {}

    ngOnDestroy(): void {
        this._dispose$.complete();
    }

    ngOnInit(): void {
        this._state.search.getPayload().pipe(takeUntil(this._dispose$)).subscribe(payload => {
            this.titleControl.setValue(payload.title);
        });
    }

    onSearch(): void {
        const payload: ISearch = { title: this.titleControl.value };
        this._state.search.searchClick(payload);
    }
}