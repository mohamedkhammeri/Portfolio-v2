import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language: 'en' | 'fr';

  constructor(
    public translateService: TranslateService,
    private location: Location,
  ) {}
  lang2:any
  initLanguage(lang:any){
    this.translateService.addLangs(['en', 'fr']);
    if (lang){
      this.lang2 = lang;

    }
    else {
      this.lang2 = 'en';

    }
    this.translateService.setDefaultLang(this.lang2);

    // Change the URL without navigate:
    this.location.go(this.lang2);

    this.language = this.lang2;
  }

  changeLanguage(language){
    this.translateService.setDefaultLang(language);
    this.location.go(language);
    this.language = language;
  }
}
