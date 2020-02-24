import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PlantComponent } from './plant/plant.component';


const routes: Routes = [{ path: 'dashboard', component: DashboardComponent },
{ path: 'plant', component: PlantComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
