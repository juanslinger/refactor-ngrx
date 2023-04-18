import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ORTLayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ORTLayoutComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ORTRoutingModule { }
