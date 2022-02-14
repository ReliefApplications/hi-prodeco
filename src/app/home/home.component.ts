import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project';
import { Article } from '../../model/article';
import { Indicator } from '../../model/indicator';
import { mainStore } from '../../store/main-store';
import { TranslateService } from '@ngx-translate/core';

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

  public videoURL = '';

  constructor() {
    this.projects = mainStore.projects;
    this.articles = mainStore.articles;
    this.indicators = mainStore.indicators;
  }

  ngOnInit(): void {
  }
/** 
  loadVideo(): void {
    this.videoURL = this.translate.instant('videos.video2');
  
  } **/
}
