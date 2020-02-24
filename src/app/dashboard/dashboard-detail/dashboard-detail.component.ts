import { Component, OnInit, Input } from '@angular/core';
import { Dashboard } from '../models/dashboard';
import { DashboardService } from '../dashboard.service';
import { ActivatedRoute, Params } from '@angular/router';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { DashboardLayoutService } from './dashboard-layout.service';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.css']
})
export class DashboardDetailComponent implements OnInit {

  dashboard: Dashboard;
  id: string;

  constructor(
    private dashboardSvc: DashboardService,
    private route: ActivatedRoute,
    private layoutService: DashboardLayoutService
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

  onSelected() {
    this.dashboardSvc.dashboardSelected.emit(this.dashboard);
  }
}
