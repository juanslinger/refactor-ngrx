import { Observable } from 'rxjs';
import { IBook } from 'src/app/shared';

export interface IBooksState {
  data: IBook[];
  isLoading: boolean;
}

export interface IBookHandler {
  clearBooks(): void;
  
  getBooks(): Observable<IBook[]>;

  isLoading(): Observable<boolean>;

  loadBooks(): void;
}
