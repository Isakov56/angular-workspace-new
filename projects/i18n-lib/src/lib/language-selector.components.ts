// projects/i18n-lib/src/lib/language-selector.component.ts
import { Component } from '@angular/core';
import { I18nLibService } from './i18n-lib.service';

@Component({
  selector: 'lib-language-selector',
  standalone: true,
  template: `
    <select (change)="changeLanguage($event)">
      <option value="en">English</option>
      <option value="it">Italian</option>
    </select>
  `,
})
export class LanguageSelectorComponent {
  constructor(private I18nLibService: I18nLibService) {}

  changeLanguage(event: any): void {
    this.I18nLibService.setLanguage(event.target.value);
  }
}
