import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../../model/article';
import { getDayMonthYear } from '../../../utils/date-utils';
import { fadeInAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, pulseAnimation } from 'angular-animations';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    fadeInAnimation(),
    pulseAnimation()
  ]
})
export class ArticlesComponent implements OnInit {

  @Input()
  articles: Article[] = [];

  imagesLoaded: Map<string, boolean> = new Map<string, boolean>([]);
  imagesHover: Map<string, boolean> = new Map<string, boolean>([]);

  constructor() {
  }

  ngOnInit(): void {
    this.articles.map((article, index) => {
      this.imagesLoaded.set(article.id, false);
    });
  }

  public formatDate(date: Date): string {
    return getDayMonthYear(date);
  }

  imageLoaded(article: Article): void {
    this.imagesLoaded.set(article.id, true);
  }

  mouseEnter(article: Article): void {
    this.imagesHover.set(article.id, !!this.imagesHover.get(article.id) ? !this.imagesHover.get(article.id) : true);
    console.log('**', this.imagesLoaded);
  }

}
