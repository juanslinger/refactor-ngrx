import { Observable } from 'rxjs';
import { IBook } from 'src/app/shared';

export interface IBooksState {
  data: IBook[];
  isLoading: boolean;
}

export interface IBookHandler {
  getBooks(): Observable<IBook[]>;

  isLoading(): Observable<boolean>;

  loadBooks(): void;
}
