import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

import { staticData } from '../../../global/static';

import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'af-main-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class AngularFeedMainHomeComponent implements OnInit {

  // Properties...
  dashboardData              = [];
  email: string              = '';
  title: string              = 'AngularFeed - Free web tutorials for Angular, React, Vue and Node.';
  url: string                = 'https://angularfeed.com/server/subscriber-mail.php';
  ourTech: Array<Object>     = staticData.technology;
  onlineTool: Array<Object>  = staticData.tool;
  ourServices: Array<Object> = staticData.services;
  homeTask: Array<Object>    = staticData.homeTask;
  language: string           = 'js';
  hooks: Object              = {};
  interpolate: Object        = {language: 'language interpolated'};

  // Constructor...
  constructor(private dashboard: DashboardService, private titleService: Title, private http: Http ) { }

  // Initialisation...
  ngOnInit() {
    this.dashboard.getDashboardList().subscribe(data => {
      this.dashboardData = data.json();
      this.titleService.setTitle(this.title);
    },
      error => {
        throw error;
      })
  }

  // Sending Mail...
  sendMail(form: NgForm) {
    let postVars = {
      email: form.value.email,
      message: "New subscriber to AngularFeed.com"
    }
    this.http.post(this.url, postVars)
      .subscribe(
        response => {
          this.email= '';
        }
      )
  }

}
