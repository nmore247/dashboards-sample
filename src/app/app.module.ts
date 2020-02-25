import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardListComponent } from './dashboard/dashboard-list/dashboard-list.component';
import { DashboardDialogComponent } from './dashboard/dashboard-dialog/dashboard-dialog.component';
import { PlantComponent } from './plant/plant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatDialogModule, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatInputModule, MatIconModule, MatMenuModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { DashboardDetailComponent } from './dashboard/dashboard-detail/dashboard-detail.component';
import {MatButtonModule} from '@angular/material/button';
import { GridsterModule } from 'angular-gridster2';
import { DashboardStartComponent } from './dashboard/dashboard-start/dashboard-start.component';
import { LineChartComponent } from './dashboard/dashboard-card-detail/charts/line-chart/line-chart.component';
import { LayoutItemDirective } from './dashboard/layout-item.directive';
import { DashboardCardOptionsComponent } from './dashboard/dashboard-card-detail/dashboard-card-options/dashboard-card-options.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    DashboardListComponent,
    DashboardDialogComponent,
    PlantComponent,
    DashboardDetailComponent,
    DashboardStartComponent,
    LineChartComponent,
    LayoutItemDirective,
    DashboardCardOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    GridsterModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  entryComponents: [DashboardDialogComponent, LineChartComponent, DashboardCardOptionsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
