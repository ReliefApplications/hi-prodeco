import { Component, Input, OnInit } from '@angular/core';
import { Indicator } from '../../../model/indicator';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent implements OnInit {

  @Input()
  indicators?: Indicator[] = [];

  constructor(public translate: TranslateService) {
  }

  ngOnInit(): void {
  }

}
