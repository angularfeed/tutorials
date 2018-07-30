import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  angular_url = 'assets/data/';
  constructor(private http: Http) { }

  public getArticleList(technologyName): Observable<any> {
    console.log(technologyName);
    return this.http.get(this.angular_url + technologyName + '/article-list.json');
  }

  public getArticleByTitle(technologyName, url): Observable<any> {
    return this.http.get(this.angular_url + technologyName + '/' + url + '.json');
  }
  
}
