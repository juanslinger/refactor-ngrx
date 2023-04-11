import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NationalLibraryLayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: NationalLibraryLayoutComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NationalLibraryRoutingModule { }
