import { Observable } from 'rxjs';

import { ISearch } from '../../../../shared';

export interface ISearchState {
  payload: ISearch;
}

export interface ISearchHandler {
  getPayload(): Observable<ISearch>;

  searchClick(payload: ISearch): void;
}
