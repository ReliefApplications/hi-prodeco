import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Indicator } from '../../../model/indicator';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('video') videoPlayer: ElementRef;
  @ViewChild('image') image: ElementRef;

  @Input()
  indicators: Indicator[] = [];

  private connection;

  @Input()
  set loadVideo(url) {
    if (!!this.videoPlayer) {
      if (!this.connection.effectiveType.match(/[2-3]/)) {
        this.videoPlayer.nativeElement.src = url;
        this.videoPlayer.nativeElement.muted = 'muted';
      }
    }
  }

  constructor(public translate: TranslateService) {
    this.connection = (navigator as any).connection;
  }

  ngOnInit(): void {
  }
}
