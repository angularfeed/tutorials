import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AngularFeedMainHomeComponent } from '../common/home/home.component';
import { HomeComponent } from '../angular/home/home.component';
import { ArticleTemplateComponent } from '../angular/article-template/article-template.component';
import { TrainingComponent } from '../training/training.component';
import { TypescriptComponent } from '../typescript/typescript.component';
import { TsArticlesComponent } from '../typescript/ts-articles/ts-articles.component';
import { ContactComponent } from '../contact/contact.component';
 
const routes: Routes = [
      { path: '', pathMatch: 'full', component: AngularFeedMainHomeComponent},
      { path: 'angular', component: HomeComponent },
      { path: 'angular/:id', component: ArticleTemplateComponent},
      { path: 'typescript', component: TypescriptComponent },
      { path: 'typescript/:id', component: TsArticlesComponent },
      { path: 'tranings', component: TrainingComponent},
      { path: 'contact', component: ContactComponent},
      { path: '**', component: HomeComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RouteModule { }