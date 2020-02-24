import { Component, OnInit, Input } from '@angular/core';
import { Dashboard } from '../models/dashboard';
import { DashboardService } from '../dashboard.service';
import { ActivatedRoute, Params } from '@angular/router';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { DashboardLayoutService, IComponent } from './dashboard-layout.service';
import { MatDialog } from '@angular/material';
import { DashboardCardOptionsComponent } from '../dashboard-card-detail/dashboard-card-options/dashboard-card-options.component';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.css']
})
export class DashboardDetailComponent implements OnInit {

  dashboard: Dashboard;
  id: string;
  showEditButton = false;
  constructor(
    private dashboardSvc: DashboardService,
    private route: ActivatedRoute,
    private layoutService: DashboardLayoutService,
    public dialog: MatDialog
    ) { }

    get options(): GridsterConfig {
      return this.layoutService.options;
    }
    get layout(): GridsterItem[] {
      return this.layoutService.layout;
    }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.dashboard = this.dashboardSvc.getDashboard(this.id);
    }
    );
  }

  get components(): IComponent[] {
    return this.layoutService.components;
  }

  onSelected() {
    this.dashboardSvc.dashboardSelected.emit(this.dashboard);
  }

  onClick() {
    this.showEditButton = !this.showEditButton;
  }

  openDialog() {
    let dialogRef = this.dialog.open(DashboardCardOptionsComponent, { height: '400px', width: '300px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');
    });
  }
}
