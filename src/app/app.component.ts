import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { mainStore } from '../store/main-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hi-project';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    translate.use('en');
    const localLang = localStorage.getItem('language');
    const selectedLang = !!localLang ? localLang : translate.getBrowserLang();
    mainStore.setLanguage(selectedLang.match(/en|fr/) ? selectedLang : 'en');
  }

}
