import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerachdashboardComponent } from './components/serachdashboard/serachdashboard.component';

const routes: Routes = [
  {
    path: 'search',
    component: SerachdashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsearchRoutingModule { }
