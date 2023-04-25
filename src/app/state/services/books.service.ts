import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { IBook } from '../../shared';

@Injectable({
    providedIn: 'root'
})
export class BooksService {

    public getAll(): Observable<IBook[]> {
        return of(this._getAll()).pipe(delay(2000));
    }

    public getNewBooks(): Observable<IBook[]> {
        return of(this._getNewBooks()).pipe(delay(2000));
    }

    private _getAll(): IBook[] {
        return [
            {
                description: 'Descripcion 1',
                pages: 100,
                title: 'Titulo 1'
            },
            {
                description: 'Descripcion 2',
                pages: 200,
                title: 'Titulo 2'
            },
            {
                description: 'Descripcion 3',
                pages: 300,
                title: 'Titulo 3'
            }
        ];
    }

    private _getNewBooks(): IBook[] {
        return [
            {
                description: 'Descripcion 4',
                pages: 400,
                title: 'Titulo 4'
            },
            {
                description: 'Descripcion 5',
                pages: 500,
                title: 'Titulo 5'
            },
            {
                description: 'Descripcion 6',
                pages: 600,
                title: 'Titulo 6'
            }
        ];
    }
}