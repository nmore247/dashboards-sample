import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PlantComponent } from './plant/plant.component';

import { DashboardDetailComponent } from './dashboard/dashboard-detail/dashboard-detail.component';

import { DashboardStartComponent } from './dashboard/dashboard-start/dashboard-start.component';


const routes: Routes = [{ path: 'dashboard', component: DashboardComponent, children: [
  { path: '', component: DashboardStartComponent },
  { path: ':id', component: DashboardDetailComponent }] },
{ path: 'plant', component: PlantComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
