import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  url = 'https://angularfeed.com/server/mailer.php';

  name: string;
  email: string;
  message: string;

  constructor(private http: Http) { }

  ngOnInit() {}

  sendMail(form: NgForm) {

    let postVars = {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    }

    this.http.post(this.url, postVars)
      .subscribe(
        response => {
          this.name = '';
          this.email = '';
          this.message = '';
        }
      )

  }
}
