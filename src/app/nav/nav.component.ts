import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isCollapsed: boolean;
  toggleNavbar = true;
  obLogo: string = "../assets/img/logo.png";
  constructor() { 
    this.isCollapsed = true;
  }

  ngOnInit(): void {
  }

}
