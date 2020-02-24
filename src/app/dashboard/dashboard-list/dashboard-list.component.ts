import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DashboardService } from '../dashboard.service';
import { Dashboard } from '../models/dashboard';
import { DashboardDialogComponent } from '../dashboard-dialog/dashboard-dialog.component';


@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {
  @Input() dashboard: Dashboard;

  dashboards: Dashboard[];

  constructor(
    public dialog: MatDialog,
    public cdRef: ChangeDetectorRef,
    private dashBoardSvc: DashboardService) { }

  // return list of dashboards using dashboard Service
  ngOnInit() {
    this.dashboards = this.dashBoardSvc.listDashboards();
  }
  // logic for adding new dashboard
  openDialog(): void {
    const dialogRef = this.dialog.open(DashboardDialogComponent, {
      width: '500px', height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result !== undefined && result !== '') {
        console.log('Pushed new Dashboard ', result);
        this.dashboards.push({ id: result, name: result });
        this.cdRef.detectChanges();
      }
    });
  }
}
