import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isCollapsed: boolean;
  toggleNavbar = true;
  obLogo: string = "../assets/img/logo.png";
  constructor() { 
    this.isCollapsed = true;
  }

  ngOnInit(): void {
  }

  logout() {

  }
}
