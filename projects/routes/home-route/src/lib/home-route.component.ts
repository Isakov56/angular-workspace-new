import { Component } from '@angular/core';
import { ContentSvgComponent } from 'shared';
// import { ContentSvgComponent } from '../../../../shared/src/public-api';


@Component({
  selector: 'lib-home-route',
  standalone: true,
  imports: [ContentSvgComponent],
  template: `
  <div class="container d-flex justify-content-center h-200 align-items-center">
    <app-content-svg></app-content-svg>
  </div>
  `,
  styleUrl: './home-route.component.scss'
})
export class HomeRouteComponent {

}
