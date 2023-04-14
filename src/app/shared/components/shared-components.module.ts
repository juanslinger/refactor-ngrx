import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookComponent } from './book/book.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [BookComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [BookComponent, LoaderComponent],
})
export class SharedComponentsModule {}
