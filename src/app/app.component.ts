import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedLayoutComponent } from 'shared-layout';
import { routes, routeConfig } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet, SharedLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-workspace-new';
  public routes = routeConfig;
  // routes = [
  //   { path: 'dashboard', label: 'Dashboard' },
  //   { path: 'table', label: 'Table' },
  //   { path: 'contact', label: 'Contact' }
  // ];
}
