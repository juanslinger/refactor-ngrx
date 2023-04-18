import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { components } from '.';
import { LibraryComponentsModule, SharedComponentsModule } from '../shared';
import { ORTBooksHandler } from '../state/store/ort/book/api';
import { ORTSearchHandler } from '../state/store/ort/search/api';
import { StateHandler } from '../state/store/shared';
import { ORTRoutingModule } from './ort-routing.module';

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ORTRoutingModule,
    SharedComponentsModule,
    LibraryComponentsModule
  ],
  providers: [
    {
      provide: StateHandler,
      useFactory: (book: ORTBooksHandler, search: ORTSearchHandler) => {
        return new StateHandler(book, search);
      },
      deps: [ORTBooksHandler, ORTSearchHandler]
    }
  ]
})
export class ORTLibraryModule { }
