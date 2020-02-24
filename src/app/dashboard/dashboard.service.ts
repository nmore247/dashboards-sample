import { Injectable } from '@angular/core';
import { Dashboard } from './models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private dashboards: Dashboard[] = [
    new Dashboard('Dash-01', 'Hymon Dashboard'),
    new Dashboard('Dash-02', 'Hymon Dashboard 2'),
    new Dashboard('Dash-03', 'Hymon Dashboard 3')
  ];

  constructor() { }

  listDashboards() {
    return this.dashboards.slice();
  }
}
