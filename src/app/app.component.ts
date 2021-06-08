import { Component } from '@angular/core';
import { mainStore } from '../store/main-store';
import { Project } from '../model/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hi-project';

  public projects: Project[];


  constructor() {
    this.projects = mainStore.projects;
    console.log('Projects', this.projects);
  }
}
