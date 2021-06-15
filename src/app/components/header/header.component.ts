import { Component, Input, OnInit } from '@angular/core';
import { Indicator } from '../../../model/indicator';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  indicators: Indicator[] = [];

  constructor(public translate: TranslateService) {
  }

  ngOnInit(): void {
    const element: any = document.getElementById('video');
    element.muted = 'muted';
  }

}
