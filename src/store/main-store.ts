import { action, observable } from 'mobx';
import { Project } from '../model/project';
import { Article } from '../model/article';
import { Indicator } from '../model/indicator';
import { Projects } from '../data/projects';
import { Articles } from '../data/articles';
import { Indicators } from '../data/indicators';

export class MainStore {

  translateService;

  @observable projects: Project[] = [];
  @observable articles: Article[] = [];
  @observable indicators: Indicator[] = [];
  @observable language: string;

  constructor(projects: Project[], articles: Article[], indicators: Indicator[]) {
    this.projects = projects;
    this.articles = articles;
    this.indicators = indicators;
  }

  @action
  setLanguage(language: string): void {
    this.language = language;
  }
}

const mainStore = new MainStore(Projects, Articles, Indicators);

export { mainStore };
