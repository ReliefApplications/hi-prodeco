import { Component, Input, OnInit } from '@angular/core';
import { Indicator } from '../../../../model/indicator';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {

  @Input()
  indicator?: Indicator;

  constructor(public translate: TranslateService) {
  }

  ngOnInit(): void {
  }

}
