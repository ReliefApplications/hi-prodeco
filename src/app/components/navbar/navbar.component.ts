import { Component, Input, OnInit } from '@angular/core';
import { mainStore } from '../../../store/main-store';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  color = 'white';

  public selectedLanguage: string;

  constructor(public translate: TranslateService) {
  }

  ngOnInit(): void {
    this.selectedLanguage = mainStore.language;
    this.translate.use(this.selectedLanguage);
  }

  onchangeLanguage(language: string): void {
    this.selectedLanguage = language;
    this.translate.use(language);
    mainStore.setLanguage(this.selectedLanguage);
  }
}
