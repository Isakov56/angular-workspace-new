import { Pipe, PipeTransform } from '@angular/core';
import { I18nLibService } from './i18n-lib.service';
import { Observable } from 'rxjs';

@Pipe({
  name: 'i18n',
  standalone: true
})
export class I18nPipe implements PipeTransform {
  constructor(private i18nLibService: I18nLibService) {}

  transform(value: string): Observable<string> {
    // The translate method now directly returns an observable of the translation value
    return this.i18nLibService.translate(value);
  }
}

