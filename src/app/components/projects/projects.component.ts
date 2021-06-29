import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../model/project';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Input()
  projects: Project[] = [];

  imagesLoaded: Map<string, boolean> = new Map<string, boolean>([]);

  constructor(public translate: TranslateService) {
  }

  ngOnInit(): void {
    this.projects.map((project, index) => {
      this.imagesLoaded.set(project.id, false);
    });
  }

  imageLoaded(project: Project): void {
    this.imagesLoaded.set(project.id, true);
  }
}
