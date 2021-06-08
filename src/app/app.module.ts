import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MobxAngularModule } from 'mobx-angular';
import { HeaderComponent } from './components/header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    NgbModule,
    MobxAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
