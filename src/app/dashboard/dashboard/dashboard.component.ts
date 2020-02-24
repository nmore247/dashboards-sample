import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Dashboard } from '../models/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  selectedDashboard: Dashboard;

  constructor(private dashBoardSvc: DashboardService) { }

  ngOnInit() {
    this.dashBoardSvc.dashboardSelected.subscribe((dashBoard: Dashboard) => {
      this.selectedDashboard = dashBoard;
    }
    );
  }

}
