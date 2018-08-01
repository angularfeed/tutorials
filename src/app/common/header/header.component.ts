import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { staticData } from '../../../global/static';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  subMenu: boolean = false;

  menu = staticData.menu;

  constructor(private router: Router) { }

  ngOnInit() { }

  public onMenuClose() {
    this.subMenu = false;
  }
  public onMenuOpen() {
    this.subMenu = true;
  }
  private onItemSelect(item: any) {
    this.router.navigate(['/'+item.link]);
  }

}
