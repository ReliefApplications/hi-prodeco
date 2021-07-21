import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../../model/project';
import { TranslateService } from '@ngx-translate/core';
import { fadeInAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, rubberBandAnimation } from 'angular-animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    fadeInAnimation()
  ]
})
export class ProjectsComponent implements OnInit {

  @Input()
  projects: Project[] = [];

  @Output()
  allImagesLoaded: EventEmitter<void> = new EventEmitter<void>();

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
    for (const isLoaded of this.imagesLoaded.values()) {
      if (!isLoaded) {
        return;
      }
    }
    this.allImagesLoaded.emit();
  }
}
