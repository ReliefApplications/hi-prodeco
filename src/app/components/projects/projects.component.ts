import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../../model/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Input()
  projects: Project[] = [];

  @Output()
  viewProjectDetails: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  viewProject(id: string): void {
    this.viewProjectDetails.emit(id);
  }
}
