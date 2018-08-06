import { Component, OnInit } from '@angular/core';
import { staticData } from '../../global/static';

@Component({
  selector: 'af-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  technologyName: string  = 'angularfeed';
  ourTech: Array<Object> = staticData.technology;

  constructor() { }

  ngOnInit() {
  }

}
