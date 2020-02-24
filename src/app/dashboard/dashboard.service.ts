import { Injectable, EventEmitter } from '@angular/core';
import { Dashboard } from './models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  dashboardSelected = new EventEmitter<Dashboard>();

  private dashboards: Dashboard[] = [
    new Dashboard('Dashboard', 'Default Dashboard'),
  ];

  constructor() { }

  listDashboards() {
    return this.dashboards.slice();
  }

  getDashboard(id: string) {
    return this.dashboards[id];
  }

}
