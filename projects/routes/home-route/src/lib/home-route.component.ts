import { Component } from '@angular/core';
import { ContentSvgComponent } from 'shared';
// import { ContentSvgComponent } from '../../../../shared/src/public-api';


@Component({
  selector: 'lib-home-route',
  standalone: true,
  imports: [ContentSvgComponent],
  template: `
  <div class="d-flex justify-content-center h-200 align-items-center">
    <app-content-svg></app-content-svg>
  </div>
  `,
})
export class HomeRouteComponent {

}
