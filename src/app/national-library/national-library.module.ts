import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { nationalLibraryComponents } from '.';
import { SharedComponentsModule } from '../shared';
import { NationalBooksHandler } from '../state/store/national/book/api';
import { NationalSearchHandler } from '../state/store/national/search/api';
import { StateHandler } from '../state/store/shared';
import { NationalLibraryRoutingModule } from './national-library-routing.module';

@NgModule({
  declarations: [
    ...nationalLibraryComponents
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NationalLibraryRoutingModule,
    SharedComponentsModule
  ],
  providers: [
    {
      provide: StateHandler,
      useFactory: (book: NationalBooksHandler, search: NationalSearchHandler) => {
        return new StateHandler(book, search);
      },
      deps: [NationalBooksHandler, NationalSearchHandler]
    }
  ]
})
export class NationalLibraryModule { }
