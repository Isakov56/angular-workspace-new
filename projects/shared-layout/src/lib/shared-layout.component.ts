import { Component, Input, OnInit, OnChanges, SimpleChanges  } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { RouteConfig } from 'shared';
import { TestClass } from 'isakov-core';
// import { RouteConfigk } from '../../../shared/src/public-api';

@Component({
  selector: 'lib-shared-layout',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  template: `
    <lib-header 
    [routes]="routes"
    >
      <ng-content></ng-content>
      <h1>{{test.path}}</h1>
    </lib-header>
  `,
  styleUrl: './shared-layout.component.scss'
})
export class SharedLayoutComponent implements OnInit, OnChanges{
  @Input() routes: RouteConfig[] =[];
  
  test = new TestClass('/new-routh', "New", "Icon")

  ngOnInit() {
    // This will log the routes when the component is initialized
    // console.log('Routes on init:', this.routes);
    console.log('class', this.test)
  }

  ngOnChanges(changes: SimpleChanges) {
    // This will log any changes to the routes input property
    // if (changes['routes']) {
    //   console.log('Routes changed:', this.routes);
    // }
  }
}
