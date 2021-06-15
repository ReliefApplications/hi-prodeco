import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../../model/article';
import { getDayMonthYear } from '../../../utils/date-utils';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input()
  articles: Article[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public formatDate(date: Date): string {
    return getDayMonthYear(date);
  }

}
