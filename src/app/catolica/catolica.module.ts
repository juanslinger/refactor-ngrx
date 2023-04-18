import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { nationalLibraryComponents } from '.';
import { LibraryComponentsModule, SharedComponentsModule } from '../shared';
import { CatolicaBooksHandler } from '../state/store/catolica/book/api';
import { CatolicaSearchHandler } from '../state/store/catolica/search/api';
import { StateHandler } from '../state/store/shared';
import { CatolicaRoutingModule } from './catolica-routing.module';

@NgModule({
  declarations: [
    ...nationalLibraryComponents
  ],
  imports: [
    CommonModule,
    CatolicaRoutingModule,
    SharedComponentsModule,
    LibraryComponentsModule
  ],
  providers: [
    {
      provide: StateHandler,
      useFactory: (book: CatolicaBooksHandler, search: CatolicaSearchHandler) => {
        return new StateHandler(book, search);
      },
      deps: [CatolicaBooksHandler, CatolicaSearchHandler]
    }
  ]
})
export class CatolicaLibraryModule { }
