import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project';
import { Article } from '../../model/article';
import { Indicator } from '../../model/indicator';
import { Router } from '@angular/router';
import { mainStore } from '../../store/main-store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'hi-project';

  public projects: Project[];
  public articles: Article[];
  public indicators: Indicator[];

  constructor(private router: Router) {
    this.projects = mainStore.projects;
    this.articles = mainStore.articles;
    this.indicators = mainStore.indicators;
  }

  goToProjectDetails(id: string): void {
    this.router.navigate(['/project-details', id]).then();
  }

  ngOnInit(): void { }

}
