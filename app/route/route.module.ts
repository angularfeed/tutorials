import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AngularFeedMainHomeComponent } from '../common/home/home.component';
import { HomeComponent } from '../technology/angular/home/home.component';
import { ArticleTemplateComponent } from '../technology/angular/article-template/article-template.component';
import { TypescriptComponent } from '../technology/typescript/typescript.component';
import { TsArticlesComponent } from '../technology/typescript/ts-articles/ts-articles.component';
import { FirebaseComponent } from '../technology/firebase/firebase.component';
import { FirebaseArticlesComponent } from '../technology/firebase/firebase-articles/firebase-articles.component';
import { TrainingComponent } from '../training/training.component';
import { ContactComponent } from '../contact/contact.component';
import { ArticlesComponent } from '../articles/articles.component';
import { TutorialsComponent } from '../tutorials/tutorials.component';
 
const routes: Routes = [
      { path: '', pathMatch: 'full', component: AngularFeedMainHomeComponent},
      { path: 'articles', component: ArticlesComponent },
      { path: 'tutorials', component: TutorialsComponent },
      { path: 'angular', component: HomeComponent },
      { path: 'angular/:id', component: ArticleTemplateComponent},
      { path: 'typescript', component: TypescriptComponent },
      { path: 'typescript/:id', component: TsArticlesComponent },
      { path: 'firebase', component: FirebaseComponent },
      { path: 'firebase/:id', component: FirebaseArticlesComponent },
      { path: 'tranings', component: TrainingComponent},
      { path: 'contact', component: ContactComponent},
      { path: '**', component: AngularFeedMainHomeComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
  declarations: []
})
export class RouteModule { }