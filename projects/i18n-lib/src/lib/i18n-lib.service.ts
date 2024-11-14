import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class I18nLibService {
  private currentLang = new BehaviorSubject<string>('en');
  private translations: { [key: string]: string } = {};

  constructor(private http: HttpClient) {}

  setLanguage(lang: string): void {
    this.currentLang.next(lang);
    this.loadTranslations(lang).subscribe();
  }

  // Load translations from the server
  loadTranslations(language: string): Observable<any> {
    const path = `assets/${language}.json`;
    return this.http.get(path).pipe(
      catchError(error => {
        console.error(`Error loading translations for ${language}:`, error);
        return of({});
      }),
      map((translations: any) => {
        this.translations = translations; // Store translations in memory
        return translations;
      })
    );
  }

  // Translate a key
  translate(key: string): Observable<string> {
    return this.currentLang.pipe(
      switchMap(lang => this.loadTranslations(lang)), // Load translations whenever language changes
      map(translations => translations[key] || key) // Return the translation or the original key if not found
    );
  }
}


