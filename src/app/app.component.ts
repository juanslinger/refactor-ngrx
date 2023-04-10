import { Component, OnDestroy, OnInit } from '@angular/core';

import { NationalLibraryStateHandler } from './state/api';
import { Observable, Subject } from 'rxjs';
import { IBook } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  constructor(private _state: NationalLibraryStateHandler) {}
  
  public books$: Observable<IBook[]> | undefined;
  public isLoadingBooks$: Observable<boolean> | undefined;
  public title = 'refactor-ngrx';

  private _dispose$ = new Subject<void>();

  ngOnDestroy(): void {
    this._dispose$.complete();
  }
  
  ngOnInit(): void {
    this._initializeSubscriptions();
  }

  private _initializeSubscriptions(): void {
    this._state.books.loadBooks();

    this.books$ = this._state.books.getBooks();
    this.isLoadingBooks$ = this._state.books.isLoading();
  }
}
