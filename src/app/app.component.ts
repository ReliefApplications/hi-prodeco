import { Component } from '@angular/core';
import { mainStore } from '../store/main-store';
import { Project } from '../model/project';
import { Article } from '../model/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hi-project';

  public projects: Project[];
  public articles: Article[];


  constructor() {
    this.projects = mainStore.projects;
    this.articles = mainStore.articles;
    console.log('ARTICLES', this.articles);
  }
}
