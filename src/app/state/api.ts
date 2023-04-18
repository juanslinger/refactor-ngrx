import { Injectable } from '@angular/core';

import {
    CatolicaBooksHandler,
    CatolicaSearchHandler,
    NationalBooksHandler,
    NationalSearchHandler,
    ORTBooksHandler,
    ORTSearchHandler,
} from './store';

@Injectable()
export class NationalLibraryStateHandler {
    constructor(
        public catolicaBooks: CatolicaBooksHandler,
        public catolicaSearch: CatolicaSearchHandler,
        public books: NationalBooksHandler,
        public search: NationalSearchHandler,
        public ortBooks: ORTBooksHandler,
        public ortSearch: ORTSearchHandler
    ) {}
}

export const handlers = [
    NationalLibraryStateHandler,
    CatolicaBooksHandler,
    CatolicaSearchHandler,
    NationalBooksHandler,
    NationalSearchHandler,
    ORTBooksHandler,
    ORTSearchHandler
];

export * from './store/catolica/book/api';
export * from './store/catolica/search/api';
export * from './store/national/book/api';
export * from './store/national/search/api';
export * from './store/ort/book/api';
export * from './store/ort/search/api';