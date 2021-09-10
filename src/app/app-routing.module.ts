import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

const routes: Routes = [
  {path: 'project-details/:id', component: ProjectDetailsComponent},
  {path: 'article-details/:id', component: ArticleDetailsComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
