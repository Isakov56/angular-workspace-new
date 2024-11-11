import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../../../../shared/src/lib/components/dashboard/dashboard.component';
import { FormComponent } from '../../../../shared/src/lib/components/form/form.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-route1',
  standalone: true,
  imports: [
    DashboardComponent,
    FormComponent,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    RouterModule
  ],
  template: `
  <div class="m-5">
    <app-dashboard></app-dashboard>
    <app-form></app-form>
    <mat-divider></mat-divider>
    <section class="d-flex align-items-center my-2 justify-content-end">
      <div class="example-button-row">
        <button mat-raised-button class="me-2" routerLink="route3">Basic table 2</button>
        <button mat-raised-button disabled class="mx-2">Disabled</button>
        <a mat-raised-button href="https://www.google.com/" target="_blank" class="mx-2">Link</a>
      </div>
    </section>
    <mat-divider></mat-divider>
  </div>
  <router-outlet></router-outlet>
  `,
  styles: ``
})
export class Route1Component {

}
