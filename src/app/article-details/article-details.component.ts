import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../model/article';
import { mainStore } from '../../store/main-store';
import { ActivatedRoute, Router } from '@angular/router';
import { getDayMonthYear } from '../../utils/date-utils';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  @Input()
  article: Article;

  constructor(private route: ActivatedRoute, private router: Router
  ) {
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    const articleID = this.route.snapshot.paramMap.get('id');
    this.article = mainStore.articles.find(article => article.id === articleID);
    if (!this.article) {
      this.router.navigate(['/home']).then();
    }
  }

  formatDate(): string {
    return getDayMonthYear(this.article.date);
  }
}
