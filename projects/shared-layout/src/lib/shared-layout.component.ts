import { Component, Input, OnInit, OnChanges, SimpleChanges  } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { RouteConfig } from 'shared';
import { TestClass } from 'isakov-core';
import { I18nLibService } from 'i18n-lib';
import { I18nPipe } from 'i18n-lib';
import { HttpClientModule } from '@angular/common/http';
import { LanguageSelectorComponent } from "i18n-lib";
// import { RouteConfigk } from '../../../shared/src/public-api';

@Component({
  selector: 'lib-shared-layout',
  standalone: true,
  imports: [HeaderComponent, RouterModule,
    I18nPipe,
    HttpClientModule, LanguageSelectorComponent],
  template: `
    <lib-header 
    [routes]="routes"
    >
      <ng-content></ng-content>
      <h1>{{test.path}}</h1>
      <h1>{{ translatedMessage  }}</h1>
    <button>{{ 'BUTTON_SAVE' | i18n  }}</button>
    <lib-language-selector></lib-language-selector>
    </lib-header>
  `,
  styleUrl: './shared-layout.component.scss'
})
export class SharedLayoutComponent implements OnInit, OnChanges{
  translatedMessage: string = '';

  @Input() routes: RouteConfig[] =[];
  
  test = new TestClass('/new-routh', "New", "Icon")

  constructor(private i18nService: I18nLibService) {
    // Example of setting the language
    this.i18nService.setLanguage('it');
  }

  ngOnInit() {
    // This will log the routes when the component is initialized
    // console.log('Routes on init:', this.routes);
    this.i18nService.translate('WELCOME_MESSAGE').subscribe((translation: string) => {
      this.translatedMessage = translation;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // This will log any changes to the routes input property
    // if (changes['routes']) {
    //   console.log('Routes changed:', this.routes);
    // }
  }
}
