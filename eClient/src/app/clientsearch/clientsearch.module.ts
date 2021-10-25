import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsearchRoutingModule } from './clientsearch-routing.module';
import { SerachdashboardComponent } from './components/serachdashboard/serachdashboard.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    SerachdashboardComponent
  ],
  imports: [
    CommonModule,
    ClientsearchRoutingModule,
    CoreModule
  ]
})
export class ClientsearchModule { }
