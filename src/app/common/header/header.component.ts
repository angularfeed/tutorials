import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  subMenu: boolean = false;

  subMenuContent = [
    { 
      name: "angular",
      link: "angular"
    },
    {
      name: "typescript",
      link: "typescript"
    },
    {
      name: "node",
      link: "node"
    },
    {
      name: "contact",
      link: "contact"
    }
  ]

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
