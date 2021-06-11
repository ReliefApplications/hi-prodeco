import { Component } from '@angular/core';
import { mainStore } from '../store/main-store';
import { Project } from '../model/project';
import { Article } from '../model/article';
import { Indicator } from '../model/indicator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hi-project';

  public projects: Project[];
  public articles: Article[];
  public indicators: Indicator[];


  constructor() {
    this.projects = mainStore.projects;
    this.articles = mainStore.articles;
    this.indicators = mainStore.indicators;
  }
}
