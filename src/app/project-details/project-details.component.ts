import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mainStore } from '../../store/main-store';
import { Project } from '../../model/project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  public project: Project = null;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const projectID = this.route.snapshot.paramMap.get('id');
    this.project = mainStore.projects.find(project => project.id === projectID);
    if (!this.project) {
      this.router.navigate(['/home']).then();
    }
  }

}
