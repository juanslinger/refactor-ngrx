import { Injectable } from '@angular/core';
import { NationalBooksHandler } from './store'

@Injectable()
export class NationalLibraryStateHandler {
    constructor(
        public books: NationalBooksHandler
    ) {}
}

export const handlers = [
    NationalBooksHandler,
    NationalLibraryStateHandler
];

export * from './store/national/book/api';