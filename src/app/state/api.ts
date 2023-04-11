import { Injectable } from '@angular/core';
import { NationalBooksHandler, NationalSearchHandler } from './store'

@Injectable()
export class NationalLibraryStateHandler {
    constructor(
        public books: NationalBooksHandler,
        public search: NationalSearchHandler
    ) {}
}

export const handlers = [
    NationalLibraryStateHandler,
    NationalBooksHandler,
    NationalSearchHandler
];

export * from './store/national/book/api';
export * from './store/national/search/api';