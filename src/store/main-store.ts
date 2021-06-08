import { observable } from 'mobx';
import { Project } from '../model/project';
import { Article } from '../model/article';
import { Projects } from '../data/projects';
import { Articles } from '../data/articles';

export class MainStore {

  @observable projects: Project[] = [];
  @observable articles: Article[] = [];

  constructor(projects: Project[], articles: Article[]) {
    this.projects = projects;
    this.articles = articles;
  }
}

const mainStore = new MainStore(Projects, Articles);

export {mainStore};
