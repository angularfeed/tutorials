import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ArticlesService } from '../../../services/articles.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-firebase-articles',
  templateUrl: './firebase-articles.component.html',
  styleUrls: ['./firebase-articles.component.css']
})
export class FirebaseArticlesComponent implements OnInit {

  hooks:Object                  = {};
  interpolate: Object           = { language: 'language interpolated' };
  title: string                 = '';
  articles: Array<Object>       = [];
  articleLists: Array<Object>   = [];
  totalCount: Array<Object>     = [];
  pageShow: boolean             = false;
  technologyName: string        = "firebase";
  pageId: string                = '';
  pageUrl: string               = '';

  constructor(private articlesService: ArticlesService, private location: PlatformLocation, private titleService: Title) {
    this.title = "AngularFeed - " + location.pathname.split('/')[2];
    this.location.onPopState(() => {
      this.ngOnInit();
    });
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
    this.articlesService.getArticleByTitle(this.technologyName, location.pathname.split('/')[2]).subscribe(data => {
      this.pageId = location.pathname.split('/')[2];
      this.pageUrl = document.URL;
      this.articles = data.json();
      this.pageShow = true;
    },
      error => {
        throw error;
      })

    this.articlesService.getArticleList(this.technologyName).subscribe(data => {
      this.totalCount = data.json();
      this.articleLists = data.json().slice(0, 10);
    },
      error => {
        throw error;
      })
  }

  articleClick() {
    setTimeout(() => {
      this.title = "AngularFeed - " + location.pathname.split('/')[2];
      this.ngOnInit();
      this.titleService.setTitle(this.title);
    }, 50);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;

    this.articlesService.getArticleList(this.technologyName).subscribe(data => {
      this.totalCount = data.json();
      this.articleLists = data.json().slice(startItem, endItem);
    },
      error => {
        throw error;
      })

  }

}
