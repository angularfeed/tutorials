import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { BsDropdownModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { PrismModule } from '@ngx-prism/core';
import { DisqusModule } from "ngx-disqus";
import { GoTopButtonModule } from 'ng2-go-top-button';

import { RouteModule } from './route/route.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AngularFeedMainHomeComponent } from './common/home/home.component';
import { HomeComponent } from './angular/home/home.component';
import { ArticleFilterPipe } from './pipes/article-filter.pipe';
import { ArticleTemplateComponent } from './angular/article-template/article-template.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { TrainingComponent } from './training/training.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { TsArticlesComponent } from './typescript/ts-articles/ts-articles.component';
import { ContactComponent } from './contact/contact.component';
import { FirebaseComponent } from './technology/firebase/firebase.component';
import { ToHtmlPipe } from './pipes/to-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticleFilterPipe,
    ArticleTemplateComponent,
    AngularFeedMainHomeComponent,
    SafeUrlPipe,
    TrainingComponent,
    TypescriptComponent,
    TsArticlesComponent,
    ContactComponent,
    FirebaseComponent,
    ToHtmlPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    RouteModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    PrismModule,
    DisqusModule.forRoot('angularfeed'),
    GoTopButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
