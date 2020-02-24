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
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    DashboardListComponent,
    DashboardDialogComponent,
    PlantComponent
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
        MatInputModule
  ],
  entryComponents: [DashboardDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
