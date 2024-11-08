import { Component, Input, OnInit, OnChanges, SimpleChanges  } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
// import { RouteConfig } from '../../../../models/models';

@Component({
  selector: 'lib-shared-layout',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  template: `
    <lib-header [routes]="routes">
      <ng-content></ng-content>
    </lib-header>
  `,
  styles: ``
})
export class SharedLayoutComponent 
implements OnInit, OnChanges
{
  @Input() routes: Routes = [];

  ngOnInit() {
    // This will log the routes when the component is initialized
    console.log('Routes on init:', this.routes);
  }

  ngOnChanges(changes: SimpleChanges) {
    // This will log any changes to the routes input property
    if (changes['routes']) {
      console.log('Routes changed:', this.routes);
    }
  }
}
