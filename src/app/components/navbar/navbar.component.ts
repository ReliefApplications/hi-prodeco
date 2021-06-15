import { Component, Input, OnInit } from '@angular/core';
import { mainStore } from '../../../store/main-store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  color = 'white';

  public selectedLanguage: 'FR' | 'EN';

  constructor() {
  }

  ngOnInit(): void {
    this.selectedLanguage = mainStore.language;
  }

  onchangeLanguage(language: 'FR' | 'EN'): void {
    this.selectedLanguage = language;
    mainStore.setLanguage(this.selectedLanguage);
  }
}
