import { observable } from 'mobx';
import { Project } from '../model/project';
import { Projects } from '../data/projects';

export class MainStore {

  @observable projects: Project[] = [];

  constructor(projects: Project[]) {
    this.projects = projects;
  }
}

const mainStore = new MainStore(Projects);

export {mainStore};
