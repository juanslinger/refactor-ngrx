import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IBook } from '../../../../shared';
import { StateHandler } from '../../../../state/store/shared/services';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss']
})
export class LibraryBooksComponent implements OnInit, OnDestroy {
    public data$: Observable<IBook[]> | undefined;
    public isLoading$: Observable<boolean> | undefined;

    private _dispose$ = new Subject<void>();

    constructor(private _state: StateHandler) {}

    ngOnDestroy(): void {
        this._dispose$.complete();
    }

    ngOnInit(): void {
        this.data$ = this._state.books.getBooks().pipe(takeUntil(this._dispose$));
        this.isLoading$ = this._state.books.isLoading().pipe(takeUntil(this._dispose$));
    }
}