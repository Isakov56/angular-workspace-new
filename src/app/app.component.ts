import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedLayoutComponent } from 'shared-layout';
import { DashboardComponent } from '../../projects/components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedLayoutComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-workspace-new';
}
