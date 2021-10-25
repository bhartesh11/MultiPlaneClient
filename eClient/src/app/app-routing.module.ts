import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'MultiplaneClientPortal',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'client',
    loadChildren: () => import('./clientsearch/clientsearch.module').then((m) => m.ClientsearchModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
