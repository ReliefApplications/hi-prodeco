import { Component, Input, OnInit } from '@angular/core';
import { Indicator } from '../../../model/indicator';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  indicators: Indicator[] = [];

  constructor() {  }

  ngOnInit(): void {
  }

}
