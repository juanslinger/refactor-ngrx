import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'catolica',
    loadChildren: () => import('./catolica/catolica.module').then(m => m.CatolicaLibraryModule)
  },
  {
    path: 'national-library',
    loadChildren: () => import('./national-library/national-library.module').then(m => m.NationalLibraryModule)
  },
  {
      path: '',
      pathMatch: 'full',
      redirectTo: '/national-library'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
