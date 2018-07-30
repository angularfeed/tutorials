import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ArticlesService } from '../../services/articles.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-ts-articles',
  templateUrl: './ts-articles.component.html',
  styleUrls: ['./ts-articles.component.css']
})
export class TsArticlesComponent implements OnInit {

  hooks = {};
  interpolate = {
    language: 'language interpolated'
  };
  title: string;
  articles = [];
  articleLists = [];
  totalCount = [];
  pageShow: boolean = false;
  technologyName: string = "typescript";

  constructor(private articlesService: ArticlesService, private location: PlatformLocation, private titleService: Title) {
    this.title = "Angular Feed - " + location.pathname.split('/')[2];
    this.location.onPopState(() => {
      this.ngOnInit();
    });
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
    this.articlesService.getArticleByTitle(this.technologyName, location.pathname.split('/')[2]).subscribe(data => {
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
      this.title = "Angular Feed - " + location.pathname.split('/')[2];
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
