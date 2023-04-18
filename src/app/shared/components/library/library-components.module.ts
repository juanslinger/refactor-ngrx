import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedComponentsModule } from '../shared-components.module';
import { LibraryBooksComponent } from './books/books.component';
import { LibrarySearchComponent } from './search/search.component';

@NgModule({
  declarations: [LibraryBooksComponent, LibrarySearchComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedComponentsModule],
  exports: [LibraryBooksComponent, LibrarySearchComponent],
})
export class LibraryComponentsModule {}
