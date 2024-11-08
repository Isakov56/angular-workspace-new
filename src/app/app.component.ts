import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedLayoutComponent } from 'shared-layout';
import { DashboardComponent } from '../../projects/shared/components/dashboard/dashboard.component';
import { routes, routeConfig } from './app.routes';
import { RouteConfig } from '../../models/models';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet, SharedLayoutComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-workspace-new';
  public routes = routes;
  // routes = [
  //   { path: 'dashboard', label: 'Dashboard' },
  //   { path: 'table', label: 'Table' },
  //   { path: 'contact', label: 'Contact' }
  // ];
}
