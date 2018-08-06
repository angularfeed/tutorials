import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articleList: Array<Object>    = [];
  totalCount: Array<Object>     = [];
  articleTotalCount: number     = 0;
  returnedArray: Array<Object>  = [];
  technologyName: string        = "angular";
  title: string                 = 'AngularFeed - Angular Articles';
  
  constructor(
    private articlesService: ArticlesService, 
    private spinner: Ng4LoadingSpinnerService,
    private titleService: Title) { 
       this.titleService.setTitle(this.title);
  }

  ngOnInit() {
    this.spinner.show();
    this.articlesService.getArticleList(this.technologyName).subscribe(data => {
      this.totalCount = data.json();
      this.articleTotalCount = this.totalCount.length;
      this.articleList = data.json().slice(0, 10);
      this.spinner.hide();
    },
    error => {
      throw error;
    }) 
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;

    this.articlesService.getArticleList(this.technologyName).subscribe(data => {
      this.totalCount = data.json();
      this.articleList = data.json().slice(startItem, endItem);
    },
      error => {
        throw error;
      }) 
    
  }

}
