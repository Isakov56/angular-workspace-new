import { Component, Input, OnInit, OnChanges, SimpleChanges  } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
// import { RouteConfig } from 'shared';
// import { RouteConfigk } from '../../../shared/src/public-api';

@Component({
  selector: 'lib-shared-layout',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  template: `
    <lib-header 
    
    >
      <ng-content></ng-content>
    </lib-header>
  `,
  styleUrl: './shared-layout.component.scss'
})
export class SharedLayoutComponent 
implements OnInit, OnChanges
{
  // @Input() routes: RouteConfig = [];

  ngOnInit() {
    // This will log the routes when the component is initialized
    // console.log('Routes on init:', this.routes);
  }

  ngOnChanges(changes: SimpleChanges) {
    // This will log any changes to the routes input property
    // if (changes['routes']) {
    //   console.log('Routes changed:', this.routes);
    // }
  }
}
