import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'lib-shared-layout',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <lib-header>
      <ng-content></ng-content>
    </lib-header>
  `,
  styles: ``
})
export class SharedLayoutComponent {

}
