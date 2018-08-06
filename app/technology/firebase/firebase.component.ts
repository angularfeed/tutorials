import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  search: string = 'Search';
  searchList = '';
  articleList = [];
  totalCount = [];
  articleTotalCount: number;
  returnedArray = [];
  technologyName: string = 'firebase';
  title: string          = 'AngularFeed - Firebase Articles'

  constructor(private articlesService: ArticlesService,
              private titleService: Title ) {
              this.titleService.setTitle(this.title);
  }

  ngOnInit() {
    this.articlesService.getArticleList(this.technologyName).subscribe(data => {
      this.totalCount = data.json();
      this.articleTotalCount = this.totalCount.length;
      this.articleList = data.json().slice(0, 10);
    },
      error => {
        throw error;
      })
  }

  filterSearch(searchVal) {
    this.search = searchVal;
    this.articleList = [];
    this.articlesService.getArticleList(this.technologyName).subscribe(data => {
      data.json().forEach(element => {
        if (element.technology == searchVal) {
          this.returnedArray.push(element);
          this.articleList = this.returnedArray.slice(0, 10);
        } else if (searchVal == 'all') {
          this.articleList.push(element);
        } else if (element.technology != searchVal) {
          if (this.articleList.length == 0) {
            console.log('No Search Found');
          }
        }
      });
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
