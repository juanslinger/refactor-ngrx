import { Injectable } from '@angular/core';

import { BooksHandlerBase } from '../ngrx/book/api';
import { SearchHandlerBase } from '../ngrx/search/api';

@Injectable()
export class StateHandler {
    constructor(public books: BooksHandlerBase, public search: SearchHandlerBase) {}
}