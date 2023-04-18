import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatolicaLayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: CatolicaLayoutComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatolicaRoutingModule { }
