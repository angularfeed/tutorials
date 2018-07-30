import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'af-main-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class AngularFeedMainHomeComponent implements OnInit {

  dashboardData = [];
  email: string = '';
  title: string = 'Angular Feed - The futue of technology is here.';
  url: string = 'https://angularfeed.com/server/subscriber-mail.php';

  language = 'js';
  hooks = {
  
  };
  interpolate = {
    language: 'language interpolated'
  };

  constructor(private dashboard: DashboardService, private titleService: Title, private http: Http ) { }

  ngOnInit() {
    this.dashboard.getDashboardList().subscribe(data => {
      this.dashboardData = data.json();
      this.titleService.setTitle(this.title);
    },
      error => {
        throw error;
      })
  }

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
