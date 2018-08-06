import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { PlatformLocation } from '@angular/common';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-article-template',
  templateUrl: './article-template.component.html',
  styleUrls: ['./article-template.component.css']
})

export class ArticleTemplateComponent implements OnInit {

  // Properties 
  hooks: Object               = { };
  interpolate: Object         = { language: 'language interpolated' };
  title: string               = '';
  articles: Array<Object>     = [];
  articleLists: Array<Object> = [];
  pageId: string              = '';
  pageUrl: string             = '';
  pageShow: boolean           = false;
  technologyName: string      = 'angular';

  // Constructor
  constructor(private articlesService: ArticlesService, private location: PlatformLocation, private titleService: Title, private spinner: Ng4LoadingSpinnerService) { 
    this.title = "AngularFeed - " + location.pathname.split('/')[2];
    this.location.onPopState(() => {
      this.ngOnInit();
    });
    this.titleService.setTitle(this.title);
  }

  // Angular Initialistaion
  ngOnInit() {
    this.pageId = location.pathname.split('/')[2];
    this.pageUrl = document.URL;
    this.spinner.show();
    this.articlesService.getArticleByTitle(this.technologyName, location.pathname.split('/')[2]).subscribe(data => {
      this.articles = data.json();
      this.pageShow = true;
      this.spinner.hide();
    },
      error => {
        throw error;
      }) 

    this.articlesService.getArticleList(this.technologyName).subscribe(data => {
      this.articleLists = data.json().slice(0, 5);
      this.spinner.hide();
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

  // Pagination 
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;

    this.articlesService.getArticleList(this.technologyName).subscribe(data => {
      this.articleLists = data.json().slice(startItem, endItem);
    },
      error => {
        throw error;
      })

  }
}
