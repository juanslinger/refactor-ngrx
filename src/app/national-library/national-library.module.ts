import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NationalLibraryRoutingModule } from './national-library-routing.module';
import { nationalLibraryComponents } from './index';
import { SharedComponentsModule } from '../shared';

@NgModule({
  declarations: [
    ...nationalLibraryComponents
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NationalLibraryRoutingModule,
    SharedComponentsModule
  ]
})
export class NationalLibraryModule { }
