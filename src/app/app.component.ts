import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hi-project';

  constructor(private router: Router) {
  }

}
